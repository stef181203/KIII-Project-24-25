package com.kiii.taskmanager.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.kiii.taskmanager.model.domain.Task;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public record CreateTaskDto(
        String name,
        String description,
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
        @Schema(type = "string", example = "2025-06-23T23:00")
        LocalDateTime dueTime
) {
    public static CreateTaskDto from(Task task) {
        return new CreateTaskDto(
                task.getName(),
                task.getDescription(),
                task.getDueTime()
        );
    }

    public static List<CreateTaskDto> from(List<Task> tasks) {
        return tasks.stream().map(CreateTaskDto::from).collect(Collectors.toList());
    }

    public Task toTask() {
        return new Task(name, description, dueTime);
    }
}
