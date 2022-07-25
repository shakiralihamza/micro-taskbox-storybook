import React from 'react';
import Task from "./Task";
import {List} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import {updateTaskState} from '../store/store';
import LoadingTasks from "./LoadingTasks";
import NoTasks from "./NoTasks";

export interface TaskType {
    id: string;
    title: string;
    state?: string;
    onArchiveTask?: (id: string) => void;
    onPinTask?: (id: string) => void;
}

const TaskList = () => {
    const tasks = useSelector((state: any) => ([
        ...state.taskbox.tasks.filter((t: TaskType) => t.state === 'TASK_PINNED'),
        ...state.taskbox.tasks.filter((t: TaskType) => t.state !== 'TASK_PINNED'),
    ]));

    const {status} = useSelector((state: any) => state.taskbox);

    const dispatch = useDispatch();

    const pinTask = (value: any) => {
        // We're dispatching the Pinned event back to our store
        dispatch(updateTaskState({id: value, newTaskState: 'TASK_PINNED'}));
    };
    const archiveTask = (value: any) => {
        // We're dispatching the Archive event back to our store
        dispatch(updateTaskState({id: value, newTaskState: 'TASK_ARCHIVED'}));
    };

    if (status === 'loading') {
        return <LoadingTasks/>;
    }
    if (tasks.length === 0) {
        return <NoTasks/>;
    }

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {tasks.map((task) => {
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
