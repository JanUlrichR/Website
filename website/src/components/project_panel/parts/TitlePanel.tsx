import React from "react";
import {Typography} from "@mui/material";

export const TitlePanel: React.FC<{title: string; url:string}> = ({title,url}) => {
    return (
        <div>
            <Typography >{title}</Typography>
            <Typography>{url}</Typography>
        </div>
    )
}