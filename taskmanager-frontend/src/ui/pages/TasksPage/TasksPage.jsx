import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import TasksGrid from "../../components/tasks/TasksGrid/TasksGrid.jsx";
import useTasks from "../../../hooks/useTasks.js";
import "./TasksPage.css";
import AddTaskDialog from "../../components/tasks/AddTaskDialog/AddTaskDialog.jsx";

const TasksPage = () => {
    const {tasks, loading, onAdd, onEdit, onDelete} = useTasks();
    const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);

    return (
        <>
            <Box className="tasks-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddTaskDialogOpen(true)}>
                                Add Task
                            </Button>
                        </Box>
                        <TasksGrid tasks={tasks} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddTaskDialog
                open={addTaskDialogOpen}
                onClose={() => setAddTaskDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default TasksPage;