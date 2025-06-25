package com.kiii.taskmanager.service.domain.impl;

import com.kiii.taskmanager.model.domain.Task;
import com.kiii.taskmanager.model.exceptions.TaskNotFoundException;
import com.kiii.taskmanager.repository.TaskRepository;
import com.kiii.taskmanager.service.domain.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Optional<Task> update(Long id, Task updatedTask) {
        return taskRepository.findById(id)
                .map(existingTask -> {
                    existingTask.setName(updatedTask.getName());
                    existingTask.setDescription(updatedTask.getDescription());
                    existingTask.setDueTime(updatedTask.getDueTime());
                    return taskRepository.save(existingTask);
                });
    }

    @Override
    public void deleteById(Long id) {
        if(taskRepository.findById(id).isPresent())
            taskRepository.deleteById(id);
        else
            throw new TaskNotFoundException(id);
    }
}
