package com.secondLife.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secondLife.Utils.EmailService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class UtilsContriler {

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendEmail")
    public String sendEmail(@RequestBody Map<String, String> map) {
        System.out.println("send Mail call");
        emailService.sendSimpleEmail(map.get("to"), map.get("subject"), map.get("text"));
        return "Email sent successfully";
    }
}
