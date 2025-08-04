package com.yash.backend.Controlle;

import com.yash.backend.DTO.LoginRequest;
import com.yash.backend.DTO.SignupRequest;
import com.yash.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest signupRequest){
        return userService.signup(signupRequest);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){
        return userService.login(loginRequest);
    }
}
