import React from 'react';
import Task from "./Task";
import {List} from "@mui/material";
import LoadingTasks from "./LoadingTasks";
import NoTasks from "./NoTasks";

export interface TaskType {
    id: string;
    title: string;
    state?: string;
    onArchiveTask?: (id: string) => void;
    onPinTask?: (id: string) => void;
}

interface TaskListProps {
    tasks: TaskType[];
    loading: boolean;
}

const TaskList: React.FC<TaskListProps> = ({tasks, loading}) => {
    if (loading) {
        return <LoadingTasks/>;
    }

    if (tasks.length === 0) {
        return <NoTasks/>;
    }

    function pinTask() {

    }

    function archiveTask() {

    }

    const tasksInOrder = [
        ...tasks.filter((t) => t.state === "TASK_PINNED"),
        ...tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {tasksInOrder.map((task) => {
                return (
                    <Task
                        id={task.id}
                        title={task.title}
                        state={task.state}
                        onArchiveTask={archiveTask}
                        onPinTask={pinTask}
                    />
                );
            })}
        </List>
    );
}

export default TaskList;
