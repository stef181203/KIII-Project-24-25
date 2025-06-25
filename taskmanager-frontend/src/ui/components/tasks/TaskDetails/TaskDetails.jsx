import React from 'react';
import {useNavigate, useParams} from "react-router";
import useTaskDetails from "../../../../hooks/useTaskDetails.js";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Typography,
    Paper,
    Breadcrumbs,
    Link
} from "@mui/material";
import {
    ArrowBack
} from "@mui/icons-material";
import dayjs from "dayjs";

const TaskDetails = () => {
    const {id} = useParams();
    const task = useTaskDetails(id);
    const navigate = useNavigate();

    if (!task) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                <Link
                    underline="hover"
                    color="inherit"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}
                >
                    Tasks
                </Link>
                <Typography color="text.primary">{task.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{p: 4, borderRadius: 4}}>
                <Grid container spacing={4}>
                    <Grid size={{xs: 12, md: 9}}>
                        <Box sx={{mb: 3}}>
                            <Typography variant="h4" gutterBottom sx={{fontWeight: 600}}>
                                Name: {task.name}
                            </Typography>

                            <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
                                Due: {dayjs(task.dueTime).format("MMM D, YYYY h:mm A")}
                            </Typography>

                            <Typography variant="body1" sx={{mb: 3}}>
                                Description: {task.description}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={12} display="flex" justifyContent="space-between">
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBack/>}
                            onClick={() => navigate("/")}
                        >
                            Back to Tasks
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default TaskDetails;