import React from "react";
import {Typography} from "@mui/material";

export const DescriptionPanel: React.FC<{description: string;}> = ({description}) => {
    return (
        <div>
            <Typography>{description}</Typography>
        </div>
    )
}