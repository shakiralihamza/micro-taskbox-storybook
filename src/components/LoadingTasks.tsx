import React from 'react';
import {Skeleton} from "@mui/material";

function LoadingTasks() {
    return (
        <>
            {
                [0, 1, 2, 3, 4, 5].map(() => (
                    <Skeleton animation="wave" variant="rectangular" width={300} height={35} sx={{mt: 1}}/>
                ))
            }
        </>
    );
}

export default LoadingTasks;
