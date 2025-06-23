import React from 'react';
import TaskCard from "../TaskCard/TaskCard.jsx";
import {Grid} from "@mui/material";

const TasksGrid = ({tasks, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {tasks.map((task) => (
                <Grid key={task.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <TaskCard task={task} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default TasksGrid;