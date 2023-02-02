import React from "react";
import {EducationAdditionalInformation, WorkStation, WorkStationType} from "../types";
import TableCell from "@mui/material/TableCell";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import {Tooltip, Typography} from "@mui/material";

import "./../CVTable.css"

const getIcon = (workstationType: WorkStationType) => {
    switch (workstationType) {
        case "Education":
            return <Tooltip title={"Education"}><SchoolIcon/></Tooltip>
        case "Work":
            return (
                <Tooltip title={"Work Experience"}><BusinessCenterIcon/></Tooltip>)
        case "Others":
            return <SchoolIcon/>
    }
}

export const CVEntryType: React.FC<{ workstation: WorkStation }> = ({workstation}) => {
    return (
        <TableCell>
            <div className={"cv-icon-column"}>
                {getIcon(workstation.type)}
                { workstation.type === "Education" &&  <Typography>({(workstation.additionalInformation as EducationAdditionalInformation).finalGrade})</Typography>}
            </div>
        </TableCell>
    )
}