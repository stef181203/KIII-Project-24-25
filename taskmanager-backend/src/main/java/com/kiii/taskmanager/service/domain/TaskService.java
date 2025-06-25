package com.kiii.taskmanager.service.domain;

import com.kiii.taskmanager.model.domain.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAll();

    Optional<Task> findById(Long id);

    Optional<Task> update(Long id, Task task);

    Task save(Task task);

    void deleteById(Long id);
}
