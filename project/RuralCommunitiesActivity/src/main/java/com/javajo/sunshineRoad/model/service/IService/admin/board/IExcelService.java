package com.javajo.sunshineRoad.model.service.IService.admin.board;

import javax.servlet.http.HttpServletResponse;


public interface IExcelService {

	
	public Object Files(HttpServletResponse  response, boolean excelDownload);
}
