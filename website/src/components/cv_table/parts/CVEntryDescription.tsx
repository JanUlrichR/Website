import React from "react";
import {WorkStation} from "../types";
import TableCell from "@mui/material/TableCell";
import {Typography} from "@mui/material";

export const CVEntryDescription: React.FC<{workstation: WorkStation}> = ({workstation}) => {
    return (
        <TableCell><Typography>{`${workstation.name} - ${workstation.description}`}</Typography></TableCell>
    )
}