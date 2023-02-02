import React from "react";
import {useQuery} from "react-query";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {Skill} from "./types";
import {SkillsComponentRow} from "./parts/SkillsComponentRow";

const fetchSkillsMock = async (): Promise<Skill[]> => {
    return [{
        tech:  {
            name: "React",
            link: "https://example.com",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
        },
        rating: 5,
    },{
        tech: {
            name: "Zod",
            link: "https://example.com",
            icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
        },
        rating: 4
    },{
        tech: {
            name: "Material UI",
            link: "https://example.com",
            icon: "https://mui.com/static/logo.png",
        },
        rating: 1
    },{
        tech: {
            name: "ReactQuery",
            link: "https://example.com",
            icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
        },
        rating: 0
    },

        {
            tech:  {
                name: "React",
                link: "https://example.com",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
            },
            rating: 5,
        },{
            tech: {
                name: "Zod",
                link: "https://example.com",
                icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
            },
            rating: 4
        },{
            tech: {
                name: "Material UI",
                link: "https://example.com",
                icon: "https://mui.com/static/logo.png",
            },
            rating: 1
        },{
            tech: {
                name: "ReactQuery",
                link: "https://example.com",
                icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
            },
            rating: 0
        },{
            tech:  {
                name: "React",
                link: "https://example.com",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
            },
            rating: 5,
        },{
            tech: {
                name: "Zod",
                link: "https://example.com",
                icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
            },
            rating: 4
        },{
            tech: {
                name: "Material UI",
                link: "https://example.com",
                icon: "https://mui.com/static/logo.png",
            },
            rating: 1
        },{
            tech: {
                name: "ReactQuery",
                link: "https://example.com",
                icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
            },
            rating: 0
        },{
            tech:  {
                name: "React",
                link: "https://example.com",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
            },
            rating: 5,
        },{
            tech: {
                name: "Zod",
                link: "https://example.com",
                icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
            },
            rating: 4
        },{
            tech: {
                name: "Material UI",
                link: "https://example.com",
                icon: "https://mui.com/static/logo.png",
            },
            rating: 1
        },{
            tech: {
                name: "ReactQuery",
                link: "https://example.com",
                icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
            },
            rating: 0
        }]
}

const fetchSkills = fetchSkillsMock

const batchSkills = (skills: Skill[], size: number): Skill[][] => {
    return skills.length > size ? [skills.slice(0, size), ...batchSkills(skills.slice(size), size)] : [skills]
}

const skillsPerRow = 5

export const SkillsComponent: React.FC<{}> = () => {

    const {isLoading, isError, data, error} = useQuery<Skill[], Error>('skills', fetchSkills)

    if (isLoading || !data) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className={"project-panel"}>

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
                        {batchSkills(data,skillsPerRow).map((skills, index) => (
                            <SkillsComponentRow key={index} skills={skills} techsPerRow={skillsPerRow}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}