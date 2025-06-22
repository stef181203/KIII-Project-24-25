package com.kiii.taskmanager.dto;

import com.kiii.taskmanager.model.domain.Task;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public record DisplayTaskDto(
        Long id,
        String name,
        String description,
        LocalDateTime dueTime
) {
    public static DisplayTaskDto from(Task task) {
        return new DisplayTaskDto(
                task.getId(),
                task.getName(),
                task.getDescription(),
                task.getDueTime()
        );
    }

    public static List<DisplayTaskDto> from(List<Task> tasks) {
        return tasks.stream().map(DisplayTaskDto::from).collect(Collectors.toList());
    }

    public Task toTask() {
        return new Task(name, description, dueTime);
    }
}
