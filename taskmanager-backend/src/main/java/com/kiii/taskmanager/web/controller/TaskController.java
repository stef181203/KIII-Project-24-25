package com.kiii.taskmanager.web.controller;

import com.kiii.taskmanager.dto.CreateTaskDto;
import com.kiii.taskmanager.dto.DisplayTaskDto;
import com.kiii.taskmanager.model.exceptions.TaskNotFoundException;
import com.kiii.taskmanager.service.application.TaskApplicationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@Tag(name = "Task API", description = "Endpoints for managing tasks")
public class TaskController {
    private final TaskApplicationService taskService;

    public TaskController(TaskApplicationService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<DisplayTaskDto> findAll() {
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayTaskDto> findById(@PathVariable Long id) {
        try {
            DisplayTaskDto task = taskService.findById(id);
            return ResponseEntity.ok(task);
        } catch (TaskNotFoundException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<DisplayTaskDto> save(@RequestBody CreateTaskDto createTaskDto) {
        DisplayTaskDto savedTask = taskService.save(createTaskDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<DisplayTaskDto> update(@PathVariable Long id, @RequestBody CreateTaskDto updateTaskDto) {
        try {
            DisplayTaskDto updatedTask = taskService.update(id, updateTaskDto);
            return ResponseEntity.ok(updatedTask);
        } catch (TaskNotFoundException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            taskService.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (TaskNotFoundException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
