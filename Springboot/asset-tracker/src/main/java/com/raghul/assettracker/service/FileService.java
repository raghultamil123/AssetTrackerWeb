package com.raghul.assettracker.service;

import java.io.FileOutputStream;
import java.util.UUID;

import com.raghul.assettracker.model.Asset;

public interface FileService {

	public Asset getAssetPdfFile(UUID assetId);
}
