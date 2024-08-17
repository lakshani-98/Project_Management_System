package com.lakshani.projectmanagementsystem.controller;

import com.lakshani.projectmanagementsystem.config.JwtProvider;
import com.lakshani.projectmanagementsystem.model.User;
import com.lakshani.projectmanagementsystem.service.UserService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String authHeader)  throws Exception {
        String jwt = authHeader.substring(7);
        String email = JwtProvider.getEmailFromToken(jwt);

        Optional<User> userOptional = Optional.ofNullable(userService.findUserByEmail(email));

        if (userOptional.isPresent()) {
            return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
