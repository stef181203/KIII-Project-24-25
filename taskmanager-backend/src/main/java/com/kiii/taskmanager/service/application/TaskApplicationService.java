package com.kiii.taskmanager.service.application;

import com.kiii.taskmanager.dto.CreateTaskDto;
import com.kiii.taskmanager.dto.DisplayTaskDto;

import java.util.List;
import java.util.Optional;

public interface TaskApplicationService {
    List<DisplayTaskDto> findAll();

    DisplayTaskDto findById(Long id);

    DisplayTaskDto save(CreateTaskDto taskDto);

    DisplayTaskDto update(Long id, CreateTaskDto taskDto);

    void deleteById(Long id);
}
