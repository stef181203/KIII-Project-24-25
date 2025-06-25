import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditTaskDialog from "../EditTaskDialog/EditTaskDialog.jsx";
import DeleteTaskDialog from "../DeleteTaskDialog/DeleteTaskDialog.jsx";
import {useNavigate} from "react-router";

const TaskCard = ({task, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [editTaskDialogOpen, setEditTaskDialogOpen] = useState(false);
    const [deleteTaskDialogOpen, setDeleteTaskDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">
                        {task.name}
                    </Typography>
                    {/*<Typography variant="subtitle2">*/}
                    {/*    {task.description}*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="body1" fontWeight="bold" sx={{textAlign: "right", fontSize: "1.25rem"}}>*/}
                    {/*    Due Time: {task.dueTime}*/}
                    {/*</Typography>*/}
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/details/${task.id}`)}
                    >
                        Info
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditTaskDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteTaskDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditTaskDialog
                open={editTaskDialogOpen}
                onClose={() => setEditTaskDialogOpen(false)}
                task={task}
                onEdit={onEdit}
            />
            <DeleteTaskDialog
                open={deleteTaskDialogOpen}
                onClose={() => setDeleteTaskDialogOpen(false)}
                task={task}
                onDelete={onDelete}
            />
        </>
    );
};

export default TaskCard;