import React from 'react';
import {useQuery} from "react-query";
import {Project} from "./types";
import {ProjectInformation} from "./parts/ProjectInformation";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import "./ProjectPanel.css"
import {Gallery} from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css'

const fetchProjectsMock = async (): Promise<Project[]> => {
    return [
        {
            projectId: "123",
            title: "Website",
            url: "https://example.com",
            description: "A small website",
            previewImage: "https://mui.com/static/logo.png",
            techs: [
                {
                    name: "React",
                    link: "https://example.com",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
                }, {
                    name: "Zod",
                    link: "https://example.com",
                    icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
                }, {
                    name: "React",
                    link: "https://example.com",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
                }, {
                    name: "Zod",
                    link: "https://example.com",
                    icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
                }, {
                    name: "React",
                    link: "https://example.com",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
                }, {
                    name: "Zod",
                    link: "https://example.com",
                    icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
                }

            ]
        },
        {
            projectId: "12314",
            title: "Website2",
            url: "https://example.com",
            description: "A smaller website",
            previewImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
            techs: [
                {
                    name: "Material UI",
                    link: "https://example.com",
                    icon: "https://mui.com/static/logo.png",
                }, {
                    name: "ReactQuery",
                    link: "https://example.com",
                    icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
                }, {
                    name: "Material UI",
                    link: "https://example.com",
                    icon: "https://mui.com/static/logo.png",
                }, {
                    name: "ReactQuery",
                    link: "https://example.com",
                    icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
                }, {
                    name: "Material UI",
                    link: "https://example.com",
                    icon: "https://mui.com/static/logo.png",
                }, {
                    name: "ReactQuery",
                    link: "https://example.com",
                    icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
                }
            ]
        }
    ]
}

const fetchProjects = fetchProjectsMock

export const ProjectPanel: React.FC<{}> = () => {

    const {isLoading, isError, data, error} = useQuery<Project[], Error>('projects', fetchProjects)

    if (isLoading || !data) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className={"project-panel"}>
            <Gallery id={"project-gallery"}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                {/*<TableCell size={"small"}>Icon </TableCell>
                        <TableCell size={"small"}>Time </TableCell>
                        <TableCell size={"small"}>Type</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell size={"small"}/>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((project, index) => (
                                <ProjectInformation key={index} project={project}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Gallery>
        </div>
    )
}


