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
        @Schema(type = "string", pattern = "yyyy-MM-dd'T'HH:mm")
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
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
