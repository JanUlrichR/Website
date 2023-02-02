import React from "react";
import {Skill} from "../types";


import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {SkillsComponentItem} from "./SkillsComponentItem";
import "./../SkillsComponent.css"

export const SkillsComponentRow: React.FC<{ skills: Skill[]; techsPerRow: number }> = ({skills, techsPerRow}) => {
    console.assert(skills.length <= techsPerRow)

    return (
        <TableRow sx={{'& > *': {border: 'unset'}}}>
            {skills.map(skill => (
                <TableCell>
                    <div className={"skill-item"}>
                        <SkillsComponentItem skill={skill}/>
                    </div>
                </TableCell>
            ))}
        </TableRow>
    )
}