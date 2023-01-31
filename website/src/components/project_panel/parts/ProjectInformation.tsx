import React from "react";
import {Project} from "../types";
import {TechGroup} from "./TechGroup";
import {
    Card, CardActions,
    CardContent, CardMedia, Collapse,
} from "@mui/material";


import "./../ProjectPanel.css"
import {ButtonGroup} from "./ButtonGroup";
import {TitlePanel} from "./TitlePanel";
import {DescriptionPanel} from "./DescriptionPanel";


export const ProjectInformation: React.FC<{ project: Project }> = ({project}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(val => !val);
    };
    return (
        <>
            <Card className={"project-card"}>

                <CardMedia
                    className={"project-card-image"}
                    component="img"
                    image={"TODO"}
                    alt="Preview of the project"
                />

                <CardContent key={"a"} className={"project-card-title"}>
                    <TitlePanel title={project.title} url={project.url}/>
                </CardContent>

                <CardContent key={"b"} sx={{padding:"8px"}} className={"project-card-technologies"}>
                    <TechGroup technologies={project.techs}/>
                </CardContent>

                <CardActions sx={{padding:"8px"}} className={"project-card-buttons"} disableSpacing>
                    <ButtonGroup expanded={expanded} handleExpandClick={handleExpandClick}/>
                </CardActions>

                <Collapse className={"project-card-expand"}  in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{padding:"8px !important"}}>
                        <DescriptionPanel description={project.description}/>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}