package com.yash.backend.Controlle;

import com.yash.backend.Model.Task;
import com.yash.backend.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // adjust to your frontend port
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getTasksByEmail(@RequestParam String email) {
        return taskRepository.findByEmail(email);
    }
}

