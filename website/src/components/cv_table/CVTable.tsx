import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React from 'react';
import "./CVTable.css"


import {WorkStation} from "./types";
import {useQuery} from "react-query";
import {CVEntry} from "./parts/CVEntry";


const fetchWorkStationsMock = async (): Promise<WorkStation[]> => {
    return [
        {
            workStationId: "001",
            from: new Date(2021, 11, 1),
            type: "Work",
            name: "TNG Technology Consulting",
            description: "Blub",
            location: {
                country: "Germany",
                city: "Munich",
                address: "abc"
            },
            logo: "https://www.tngtech.com/typo3conf/ext/kk_template/Resources/Public/Images/Logox2.png",
            additionalInformation: {}
        }, {
            workStationId: "002",
            from: new Date(2020, 9, 1),
            to: new Date(2022, 6, 1),
            type: "Work",
            name: "Amberoad",
            description: "Blub2",
            location: {
                country: "Germany",
                city: "Aachen",
                address: "abc"
            },
            logo: "https://ambersearch.de/wp-content/uploads/2022/07/amberoad-logo-rgb-300x200.png",
            additionalInformation: {}
        }, {
            workStationId: "003",
            from: new Date(2020, 8, 1),
            to: new Date(2022, 8, 1),
            type: "Education",
            name: "Master Of Science: Computer Science",
            description: "Blub2",
            location: {
                country: "Germany",
                city: "Aachen",
                address: "abc"
            },
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/RWTH_Logo_3.svg",
            additionalInformation: {
                finalGrade: 1.1,
                certificateLink: "https://www.buds.com.ua/images/Lorem_ipsum.pdf"
            }
        }, {
            workStationId: "004",
            from: new Date(2017, 8, 1),
            to: new Date(2020, 8, 1),
            type: "Education",
            name: "Bachelor Of Science: Computer Science",
            description: "Blub2",
            location: {
                country: "Germany",
                city: "Aachen",
                address: "abc"
            },
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/RWTH_Logo_3.svg",
            additionalInformation: {
                finalGrade: 1.3,
                certificateLink: "https://www.soundczech.cz/temp/lorem-ipsum.pdf"
            }
        }, {
            workStationId: "005",
            from: new Date(2017, 8, 1),
            to: new Date(2020, 8, 1),
            type: "Work",
            name: "Minijob",
            description: "Blub2",
            location: {
                country: "Germany",
                city: "Mönchengladbach",
                address: "abc"
            },
            logo: "data:image/png;base64,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",
            additionalInformation: {}
        }, {
            workStationId: "006",
            from: new Date(2017, 8, 1),
            to: new Date(2020, 8, 1),
            type: "Education",
            name: "A-levels",
            description: "Blub2",
            location: {
                country: "Germany",
                city: "Mönchengladbach",
                address: "abc"
            },
            logo: "https://gag-mg.de/typo3temp/assets/_processed_/f/a/csm_gagLogo41_003c83f5fe.png",
            additionalInformation: {
                finalGrade: 1.9,
                certificateLink: "https://www.soundczech.cz/temp/lorem-ipsum.pdf"
            }
        },
    ]
}

const fetchWorkStations = fetchWorkStationsMock

export const CVTable: React.FC<{}> = () => {

    const {isLoading, isError, data, error} = useQuery<WorkStation[], Error>('WorkStations', fetchWorkStations)

    if (isLoading || !data) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className={"cv-table-panel"}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    {/*<TableHead>
                        <TableRow>
                            <TableCell size={"small"}>Icon </TableCell>
                            <TableCell size={"small"}>Time </TableCell>
                            <TableCell size={"small"}>Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell size={"small"}/>
                        </TableRow>
                    </TableHead>*/}
                    <TableBody>
                        {data.sort((a, b) => a.from < b.from ? 1 : -1).map((workstation, index) => (
                            <CVEntry key={index} workstation={workstation}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


