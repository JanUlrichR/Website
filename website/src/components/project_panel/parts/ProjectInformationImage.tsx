import React from "react";
import {Box, Tooltip} from "@mui/material";
import {Project} from "../types";

export const ProjectInformationImage: React.FC<{ project: Project }> = ({project}) => {
    return (
        <Tooltip title={project.title}>
            <Box
                component="img"
                sx={{
                    height: 50,
                    width: 100,
                    objectFit: "contain"
                }}
                alt={project.title}
                src={project.previewImage}
            />
        </Tooltip>
    )
}