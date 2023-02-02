import React from "react";
import {WorkStation} from "../types";
import TableCell from "@mui/material/TableCell";
import {Tooltip, Typography} from "@mui/material";

const DateOptions = {year: 'numeric', month: 'short', day: 'numeric'} as Intl.DateTimeFormatOptions;

const calculateDateDifference = (start: Date, end: Date) => {
    // Only an approx.

    let difference = {years: 0, months: 0, days: 0};

    if (start < end) {
        difference.years = end.getFullYear() - start.getFullYear();
        difference.months = end.getMonth() - start.getMonth();
        difference.days = end.getDate() - start.getDate();

        if (difference.months < 0) {
            difference.years--;
            difference.months += 12;
        }

        if (difference.days < 0) {
            difference.months = Math.max(0, difference.months - 1);
            difference.days += 30;
        }
    }

    return difference;
}

export const CVEntryTimespan: React.FC<{ workstation: WorkStation }> = ({workstation}) => {
    const fromDateString = workstation.from.toLocaleDateString("en-US", DateOptions)
    const toDateString = workstation.to ? workstation.to.toLocaleDateString("en-US", DateOptions) : "today"

    const span = calculateDateDifference(workstation.from, workstation.to ? workstation.to : new Date())
    const tooltipText = `${span.years ? span.years + " years" : ""} ${span.months ? span.months + " months" : ""}`

    return (
        <TableCell component="th" scope="row">
            <Tooltip title={tooltipText}>
                <Typography>{`${fromDateString} - ${toDateString}`}</Typography>
            </Tooltip>
        </TableCell>
    )
}