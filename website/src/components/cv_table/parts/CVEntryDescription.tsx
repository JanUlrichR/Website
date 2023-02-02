import React from "react";
import {WorkStation} from "../types";
import TableCell from "@mui/material/TableCell";

export const CVEntryDescription: React.FC<{workstation: WorkStation}> = ({workstation}) => {
    return (
        <TableCell>{`${workstation.name} - ${workstation.description}`}</TableCell>
    )
}