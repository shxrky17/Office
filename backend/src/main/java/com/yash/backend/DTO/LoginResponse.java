package com.yash.backend.DTO;


public class LoginResponse {
    private String jwt;
    private String message;

    public LoginResponse(String jwt,String message){
        super();
        this.jwt=jwt;
        this.message=message;
    }
    public String getJwt() {
        return jwt;
    }

    public String getMessage() {
        return message;
    }
}

