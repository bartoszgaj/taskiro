package com.io.Taskiro.web;


import com.google.maps.model.LatLng;
import com.io.Taskiro.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class TaskController {

    private final Logger log = LoggerFactory.getLogger(TaskController.class);
    private TaskRepository taskRepository;
    private UserRepository userRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/users/{userId}/tasks")
    Collection<Task> getAllTasksByUserId(@PathVariable (value= "userId") Long userId) {
        return taskRepository.findByUserId(userId);
    }

    @GetMapping("/task/{id}")
    ResponseEntity<?> getTask(@PathVariable Long id) {
        Optional<Task> task = taskRepository.findById(id);
        return task.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/users/{userId}/tasks")
    ResponseEntity<Task> createTask(@PathVariable (value="userId") Long userId,
                                    @RequestParam String title,
                                    @RequestParam String description,
                                    @RequestParam TaskType type,
                                    @RequestParam Double lat,
                                    @RequestParam Double lng,
                                    @RequestParam Integer price,
                                    @RequestParam String deadline,
                                    @RequestParam String addTime

                                    ) throws URISyntaxException {

        Task task = new Task(title,description,type,new LatLng(lat,lng),price,
                LocalDateTime.parse(deadline),LocalDateTime.parse(addTime));
        log.info("Request to create task: {}", task);
        Optional<User> user = userRepository.findById(userId);
        if(user.get() != null) {
            task.setUser(user.get());
            Task result = taskRepository.save(task);
            return ResponseEntity.created(new URI("/api/" + userId + "/tasks/" + result.getId()))
                    .body(result);
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/tasks")
    Collection<Task> tasks() {return taskRepository.findAll();}

    @PutMapping("/task")
    ResponseEntity<Task> updateTask(@Valid @RequestBody Task task) {
        log.info("Request to update task: {}", task);
        Task result = taskRepository.save(task);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/task/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        log.info("Request to delete task: {}", id);
        taskRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}