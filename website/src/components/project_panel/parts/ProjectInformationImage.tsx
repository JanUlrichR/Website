import React from "react";
import {Box, Tooltip} from "@mui/material";
import {Project} from "../types";
import {Item} from "react-photoswipe-gallery";

export const ProjectInformationImage: React.FC<{ project: Project }> = ({project}) => {

    return (

        <Item
            original={project.previewImage}
            thumbnail={project.previewImage}
            width="1600"
            height="1600"
            alt={project.title}
            // You can pass string id
            id={project.title+"preview"}
        >
            {({ref, open}) =>
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
                        onClick={open}
                        ref={ref}
                    />
                </Tooltip>
            }
        </Item>

    )
}