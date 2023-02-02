import React from "react";
import {
    EducationAdditionalInformation,
    OthersAdditionalInformation,
    WorkAdditionalInformation,
    WorkStation,
    WorkStationType
} from "../types";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Box, Collapse, IconButton, Typography} from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import {CVEntryImage} from "./CVEntryImage";
import {CVEntryTimespan} from "./CVEntryTimespan";
import {CVEntryType} from "./CVEntryType";
import {CVEntryDescription} from "./CVEntryDescription";
import {CVEntryEducation} from "./CVEntryEducation";
import {CVEntryWork} from "./CVEntryWork";
import {CVEntryOthers} from "./CVEntryOthers";


export const CVEntry: React.FC<{workstation: WorkStation}> = ({workstation}) => {
    const [open, setOpen] = React.useState(false);


    return (
        <>

            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <CVEntryImage workstation={workstation}/>
                <CVEntryTimespan workstation={workstation}/>
                <CVEntryType workstation={workstation}/>
                <CVEntryDescription workstation={workstation}/>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {workstation.type === "Education" && <CVEntryEducation educationInformation={workstation.additionalInformation as EducationAdditionalInformation} title={workstation.name} description={workstation.description}/>}
                            {workstation.type === "Work" && <CVEntryWork workInformation={workstation.additionalInformation as WorkAdditionalInformation}/>}
                            {workstation.type === "Others" && <CVEntryOthers othersInformation={workstation.additionalInformation as OthersAdditionalInformation}/>}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}