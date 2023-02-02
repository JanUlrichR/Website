import React from "react";
import {WorkStation} from "../types";
import {Box, Tooltip} from "@mui/material";
import TableCell from "@mui/material/TableCell";

export const CVEntryImage: React.FC<{ workstation: WorkStation }> = ({workstation}) => {
    return (
        <TableCell>
            <Tooltip title={workstation.name}>
                <Box
                    component="img"
                    sx={{
                        height: 50,
                        width: 100,
                        objectFit: "contain"
                    }}
                    alt={workstation.name}
                    src={workstation.logo}
                />
            </Tooltip>
        </TableCell>
    )
}