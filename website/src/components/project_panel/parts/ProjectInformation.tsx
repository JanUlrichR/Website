import React from "react";
import {Project} from "../types";
import {TechGroup} from "./TechGroup";
import {Collapse} from "@mui/material";


import "./../ProjectPanel.css"
import {ButtonGroup} from "./ButtonGroup";
import {TitlePanel} from "./TitlePanel";
import {DescriptionPanel} from "./DescriptionPanel";
import TableRow from "@mui/material/TableRow";
import {ProjectInformationImage} from "./ProjectInformationImage";
import TableCell from "@mui/material/TableCell";

export const ProjectInformation: React.FC<{ project: Project }> = ({project}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(val => !val);
    };
    return (
        <>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <ProjectInformationImage project={project}/>
                </TableCell>

                <TableCell>
                    <TitlePanel title={project.title} url={project.url}/>
                </TableCell>

                <TableCell>
                    <TechGroup technologies={project.techs}/>
                </TableCell>

                <TableCell>
                    <ButtonGroup expanded={expanded} handleExpandClick={handleExpandClick}/>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <DescriptionPanel description={project.description}/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}