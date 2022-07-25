import React from 'react';
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import {TaskType} from "./TaskList";


const Task: React.FC<TaskType> = ({id, title, state, onArchiveTask, onPinTask}) => (
    <ListItem
        key={id}
        secondaryAction={
            state !== "TASK_ARCHIVED" && (
                <IconButton
                    edge="end"
                    onClick={() => onPinTask?.(id)}
                    aria-label="pin_task"
                    color={state === "TASK_PINNED" ? "primary" : "default"}
                >
                    <PushPinIcon/>
                </IconButton>)
        }
        disablePadding
    >
        <ListItemButton role={undefined} dense>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={state === 'TASK_ARCHIVED'}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => onArchiveTask?.(id)}
                    inputProps={{'aria-labelledby': id}}
                />
            </ListItemIcon>
            <ListItemText id={id} sx={{color: state === 'TASK_ARCHIVED'?'text.disabled':'default'}} primary={title}/>
        </ListItemButton>
    </ListItem>
);

export default Task;
