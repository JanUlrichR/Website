import React from "react";

import {IconButton} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const SkillsComponentScrollButton: React.FC<{ props: any }> = ({props}) => {
    return (
        <IconButton {...props}>
            { props.direction === "left" && !props.disabled && <KeyboardArrowLeftIcon color={"primary"}/>}
            { props.direction === "left" && props.disabled && <KeyboardArrowLeftIcon color={"disabled"}/>}
            { props.direction === "right" && !props.disabled && <KeyboardArrowRightIcon color={"primary"}/>}
            { props.direction === "right" && props.disabled && <KeyboardArrowRightIcon color={"disabled"}/>}
        </IconButton>
    );
}