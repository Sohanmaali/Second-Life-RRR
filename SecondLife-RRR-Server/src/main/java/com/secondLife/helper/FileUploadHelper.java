package com.secondLife.helper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {

    @Value("${file.upload-dir}")
    private String uploadDir;

    public boolean uploadFile(MultipartFile multipartFile) {
        try {
            // Ensure the directory exists
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Copy the file to the target location (Replacing existing file with the same name)
            Files.copy(multipartFile.getInputStream(),
                    Paths.get(uploadDir + File.separator + multipartFile.getOriginalFilename()),
                    StandardCopyOption.REPLACE_EXISTING);
            return true;
        } catch (IOException e) {
            System.out.println(e);
            return false;
        }
    }
}
