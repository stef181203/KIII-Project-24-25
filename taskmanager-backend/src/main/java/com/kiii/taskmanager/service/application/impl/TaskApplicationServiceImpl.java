package com.kiii.taskmanager.service.application.impl;

import com.kiii.taskmanager.dto.CreateTaskDto;
import com.kiii.taskmanager.dto.DisplayTaskDto;
import com.kiii.taskmanager.model.exceptions.TaskNotFoundException;
import com.kiii.taskmanager.service.application.TaskApplicationService;
import com.kiii.taskmanager.service.domain.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskApplicationServiceImpl implements TaskApplicationService {
    private final TaskService taskService;

    public TaskApplicationServiceImpl(TaskService taskService) {
        this.taskService = taskService;
    }

    @Override
    public List<DisplayTaskDto> findAll() {
        return taskService.findAll().stream()
                .map(DisplayTaskDto::from)
                .toList();
    }

    @Override
    public DisplayTaskDto findById(Long id) {
        return taskService.findById(id)
                .map(DisplayTaskDto::from)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

    @Override
    public DisplayTaskDto save(CreateTaskDto taskDto) {
        return DisplayTaskDto.from(taskService.save(taskDto.toTask()));
    }

    @Override
    public DisplayTaskDto update(Long id, CreateTaskDto taskDto) {
        return taskService.update(id, taskDto.toTask())
                .map(DisplayTaskDto::from)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

    @Override
    public void deleteById(Long id) {
        taskService.deleteById(id);
    }
}
