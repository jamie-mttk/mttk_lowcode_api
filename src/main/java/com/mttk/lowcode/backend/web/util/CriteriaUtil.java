package com.mttk.lowcode.backend.web.util;

import java.util.regex.Pattern;

import org.bson.conversions.Bson;

import com.mongodb.client.model.Filters;

public class CriteriaUtil {
	/**
	 * 解析输入值value为合适的模糊匹配
	 * 如果value为null,返回null
	 * @param key		参数的key
	 * @param value
	 * @return
	 */
	public static Bson parseFilter(String key,String value) {
		if (StringUtil.isEmpty(value)) {
			return null;
		}
	
		//
		Bson filter=Filters.regex(key,buildPattern(value));
		return filter;
	}
	/**
	 * 解析value中的值，如果有*认为是用户指定了模糊匹配，否则自动设置为模糊匹配
	 * @param value
	 * @return
	 */
	public static Pattern buildPattern(String value) {
		String pattern=null;
		if (StringUtil.notEmpty(value) && value.indexOf('*') >= 0) {
			//显式给出了匹配符号,使用给出的
			pattern=PatternUtil.wildCardTransform(value);
		}else {
			//否则认为是部分匹配
			value=value.replaceAll("\\(", "\\\\(");
			value=value.replaceAll("\\)", "\\\\)");
			value=value.replaceAll("\\[", "\\\\[");
			value=value.replaceAll("\\]", "\\\\]");
			value=value.replaceAll("\\+", "\\\\+");
			pattern="^.*"+value+".*$";
		}
		//
		return Pattern.compile(pattern,Pattern.CASE_INSENSITIVE);		
	}
}
