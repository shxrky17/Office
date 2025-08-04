package com.yash.backend.Service;

import com.yash.backend.DTO.LoginRequest;
import com.yash.backend.DTO.SignupRequest;
import com.yash.backend.Model.User;
import com.yash.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String signup(SignupRequest signupRequest) {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return "User with this email already exists";
        }

        if (userRepository.existsByUserName(signupRequest.getUserName())) {
            return "User with this username already exists";
        }

        User user = new User();
        user.setFirstName(signupRequest.getFirstName());
        user.setLastName(signupRequest.getLastName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setPhoneNumber(signupRequest.getPhoneNumber());
        user.setUserName(signupRequest.getUserName());

        userRepository.save(user);
        return "Signup successful";
    }

    public String login(LoginRequest loginRequest) {
        Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return "Login successful";
            } else {
                return "Invalid password";
            }
        } else {
            return "Invalid email";
        }
    }
}
