package com.yash.backend.Controlle;


import com.yash.backend.DTO.LoginRequest;
import com.yash.backend.DTO.LoginResponse;
import com.yash.backend.Repository.UserRepository;
import com.yash.backend.Model.User;
import com.yash.backend.Service.JwtService;
import com.yash.backend.Service.CustomUserDetailsService;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

    private final UserRepository userRepo;
    private final CustomUserDetailsService myUserDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtProvider;

    public AuthController(UserRepository userRepo,
                          CustomUserDetailsService myUserDetailsService,
                          PasswordEncoder passwordEncoder,
                          JwtService jwtProvider) {
        this.userRepo = userRepo;
        this.myUserDetailsService = myUserDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/signup")
    public ResponseEntity<LoginResponse> createUserHandler(@RequestBody User user) throws UsernameNotFoundException {
        String email = String.valueOf(user.getEmail());
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        User isEmailExist = userRepo.findByEmail(email);

        if (isEmailExist != null) {
            throw new UsernameNotFoundException("Email already used with another account");
        }

        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);
        createdUser.setUserName(user.getUserName());
        createdUser.setPhoneNumber(user.getPhoneNumber());

        User savedUser = userRepo.save(createdUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(
                savedUser.getEmail(), savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(String.valueOf(authentication));

        LoginResponse authResponse = new LoginResponse(token, "Sign-Up successfully");
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<LoginResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication.getName()); // <- fix here


        LoginResponse authResponse = new LoginResponse(token, "Sign-In successfully");
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }


    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = myUserDetailsService.loadUserByUsername(username);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid Username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid Password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
