package com.lakshani.projectmanagementsystem.config;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import  org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;

public class JwtTokenValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
      String jwt = request.getHeader(JwtConstant.JWT_HEADER);

      //Bearer jwt

      if(jwt!=null){
          jwt=jwt.substring(7);
          try{

          } catch(Exception e)

      }
    }


}
