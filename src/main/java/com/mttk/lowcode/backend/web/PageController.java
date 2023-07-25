package com.mttk.lowcode.backend.web;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mttk.lowcode.backend.config.util.IOUtil;
import com.mttk.lowcode.backend.web.util.AbstractPersistentController;
import com.mttk.lowcode.backend.web.util.StringUtil;

@RestController
@RequestMapping("/page")
public class PageController extends AbstractPersistentController {
	@Autowired PageDeployController pageDeployController;
	@Override
	protected String getColName() {
		return "userPage";
	}
	
	@Override
	protected void preQuery(List<AggregationOperation> aggregations) {
		// Sort
		aggregations.add(Aggregation.sort(Direction.ASC, "sequence"));
	}
	@Override
	protected Fields getQueryFields() {
		return Fields.fields("_id","name","description","menu","sequence","icon","_updateTime");
	}
	@Override
	protected void postQuery(List<Document> result) {
		//Add menu name
		for(Document d:result) {
			String menu=d.getString("menu");
			if (StringUtil.notEmpty(menu)) {
				//load 
				Document menuDoc = template.findById(menu, Document.class, "userMenu");
				if(menuDoc!=null) {
					d.append("menu_NAME", menuDoc.getString("name"));
				}
			}
		}
	}
	//
	@PostMapping(value = "/saveInfo")
	public ResponseEntity<Document> saveInfo(@RequestBody Document body) throws Exception {
		//System.out.println(body);
		Document result =null;
		if(body.containsKey("_id")) {
			//this is to update report info
			result=template.findById(body.get("_id"), Document.class, getColName());
			result.put("name", body.getString("name"));
			result.put("description", body.getString("description"));		
			result.put("menu", body.getString("menu"));	
			result.put("icon", body.getString("icon"));	
			result.put("sequence", body.getInteger("sequence",0));	
			result.put("_updateTime", new Date());
			result = template.save(result, getColName());
			//			
			return ResponseEntity.ok(result);
		}else {
			//this is a new report
			return save(body);
		}
	
	}
	
	@GetMapping(value = "/loadByName")
	public ResponseEntity<Document> loadByName(String app,String name) throws Exception {
		
		Criteria criteria = new Criteria().andOperator(Criteria.where("app").is(app),Criteria.where("name").is(name));
		Document result = template.findOne(new Query(criteria), Document.class, getColName());
		if (result == null) {
			return ResponseEntity.ok(new Document());
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
	
	@PostMapping(value = "/copy")
	public ResponseEntity<Document> copy(String id) throws Exception {
	
		Document page = template.findById(id, Document.class, getColName());
		if(page==null) {
			throw new RuntimeException("No page is found by id:"+id);
		}
		//remove _id
		page.remove("_id");
		page.append("name", "Copy of "+page.getString("name"));
		Document result=template.save(page, getColName());

		return ResponseEntity.ok(result);
	}
	//Please note the spring boot default multipart handler should be disabled
	@PostMapping(value = "/doImport")
	public Document doImport(HttpServletRequest request) throws Exception {

		//
		if (!ServletFileUpload.isMultipartContent(request)) {
			throw new ServletException("Upload file form should be encoded in multipart/form-data");
		}

		DiskFileItemFactory factory = new DiskFileItemFactory(102400000,new File("d:/"));
		ServletFileUpload upload = new ServletFileUpload(factory);
		
		upload.setHeaderEncoding("UTF-8");
		List<FileItem> items = (List<FileItem>) upload.parseRequest(request);

		//
		List<FileItem> uploadFiles = new ArrayList<>();
		//
		String app=null;
		//
		for (FileItem item : items) {
			//System.out.println(item);
			if (item.isFormField()) {
				if(item.getFieldName().equals("app")) {
					app=item.getString();
				}
			} else {
				uploadFiles.add(item);
			}
		}
		if (uploadFiles.size()<=0) {
			throw new RuntimeException("No upload file is found");
		}
		if (uploadFiles.size()!=1) {
			throw new RuntimeException("Only one upload file is allowed");
		}
		if(StringUtil.isEmpty(app)) {
			throw new RuntimeException("App is not set");
		}
		//
		ZipEntry zipEntry =null;
		try(InputStream is=uploadFiles.get(0).getInputStream()){
			try(ZipInputStream zipInputStream = new ZipInputStream(is)){
			
			while ((zipEntry = zipInputStream.getNextEntry()) != null) {
				
				if(zipEntry.getName().startsWith("page_")){
					doImportSingle(zipEntry,zipInputStream,app);
				}
			}}
		}
	

		//
		return new Document().append("success", true);
	}
	
	private void doImportSingle(ZipEntry zipEntry,ZipInputStream zipInputStream,String app) throws Exception{
		byte[] data=IOUtil.toArray(zipInputStream);
		//
		Document page=Document.parse(new String(data,"utf-8"));
		//
		save(page);
	}
	
	@PostMapping(value = "/doExport")
	public void doExport(@RequestBody List<String> ids, HttpServletResponse response) throws Exception {
		//
		String filename =			 "pages" + new SimpleDateFormat("yyyyMMdd'T'HHmmss").format(new Date()) + ".zip";
			
		response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
		response.setHeader("Content-Type", "application/octet-stream");
		response.setHeader("Content-Disposition", "attachment; filename=" + filename);
		//
		try(OutputStream os = response.getOutputStream()){
			generate(os, ids);
		}
	}
	//
	private void generate(OutputStream os, List<String> ids) throws Exception {		
		try (ZipOutputStream zipOutputStream = new ZipOutputStream(new BufferedOutputStream(os))){
			ZipEntry zipEntry = null;
			for (String id : ids) {
				//load page
				Document page=load(id).getBody();
				if(page==null) {
					continue;
				}
				//clear id/app/menumenu
//				page.remove("_id");
//				page.remove("app");
//				page.remove("menu");
				//
				zipEntry = new ZipEntry("page_"+id+".json");
				zipOutputStream.putNextEntry(zipEntry);
				zipOutputStream.write(page.toJson().getBytes("utf-8"));				
			}
		} 
	}
	
}
