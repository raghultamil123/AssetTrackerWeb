package com.raghul.assettracker.service;

import java.io.FileOutputStream;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.raghul.assettracker.manager.AssetManager;
import com.raghul.assettracker.model.Asset;

@Component
public class FileServiceImpl implements FileService{
	
 
	@Resource
	private AssetManager assetManager;

	@Override
	public Asset getAssetPdfFile(UUID assetId) {
		Asset asset = assetManager.findByAssetId(assetId);
		try {
			FileOutputStream out = new FileOutputStream("asset-"+asset.getAssetName()+".pdf");
			Document document = new Document();
			PdfWriter writer = PdfWriter.getInstance(document, out);
			document.open();
			document.add(new Paragraph(asset.getAssetName()));
			document.close();
			writer.close();
			return asset;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
		
	}

}
