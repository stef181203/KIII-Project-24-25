import {useCallback, useEffect, useState} from "react";
import taskRepository from "../repository/taskRepository.js";

const initialState = {
    "tasks": [],
    "loading": true,
};

const stripDueTime = (dueTime) => {
  if(!dueTime) return "";
    return dueTime.length === 19 ? dueTime.slice(0, 16) : dueTime;
};

const useTasks = () => {
    const [state, setState] = useState(initialState);

    const fetchTasks = useCallback(() => {
        setState(initialState);
        taskRepository
            .findAll()
            .then((response) => {
                setState({
                    "tasks": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        data.dueTime = stripDueTime(data.dueTime)
        taskRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new task.");
                fetchTasks();
            })
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    const onEdit = useCallback((id, data) => {
        data.dueTime = stripDueTime(data.dueTime)
        taskRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the task with ID ${id}.`);
                fetchTasks();
            })
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    const onDelete = useCallback((id) => {
        taskRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the task with ID ${id}.`);
                fetchTasks();
            })
            .catch((error) => console.log(error));
    }, [fetchTasks]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};
};

export default useTasks;
