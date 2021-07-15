package com.raghul.assettracker.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.raghul.assettracker.model.Asset;
import com.raghul.assettracker.service.FileService;

@RestController
@RequestMapping("/api/v1/file")
public class FileController {
	
	@Resource
	private ResourceLoader resourceLoader;
	
	@Resource
	private FileService fileService;
	
	@GetMapping("/asset/{assetId}")
	public ResponseEntity<?> getAssetFile(@PathVariable("assetId") UUID assetId,HttpServletResponse response) throws IOException{
		Asset asset = fileService.getAssetPdfFile(assetId);
		
		System.out.println(Thread.currentThread().getContextClassLoader().getResource(".").getPath());
		
		InputStream resourceStream = new FileInputStream("asset-"+asset.getAssetName()+".pdf")
				;
		byte[] res = FileCopyUtils.copyToByteArray(resourceStream);		
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_PDF)
		.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + asset.getAssetName() + "\"")
		.body(res);

	}

}
