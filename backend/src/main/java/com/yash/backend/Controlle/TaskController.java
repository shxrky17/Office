package com.yash.backend.Controlle;

import com.yash.backend.Model.Task;
import com.yash.backend.Model.User;
import com.yash.backend.Repository.TaskRepository;
import com.yash.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api") // adjust to your frontend port
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/tasks")
    public List<Task> getTasksByEmail(@RequestParam String email) {
        return taskRepository.findByEmail(email);
    }

    @GetMapping("/det")
    public User getUserByEmail(@RequestParam String email){
        return userRepository.findByEmail(email);
    }

}

