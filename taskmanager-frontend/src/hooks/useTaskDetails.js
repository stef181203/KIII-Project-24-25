import {useEffect, useState} from "react";
import taskRepository from "../repository/taskRepository.js";

const useTaskDetails = (id) => {
    const [task, setTask] = useState(null);

    useEffect(() => {
        taskRepository
            .findById(id)
            .then((response) => {
                setTask(response.data);
            })
            .catch((error) => console.log(error));
    }, [id]);

    return task;
};

export default useTaskDetails;