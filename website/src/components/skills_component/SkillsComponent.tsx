import React, {useState} from "react";
import {useQuery} from "react-query";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import {Skill} from "./types";
import {SkillsComponentRow} from "./parts/SkillsComponentRow";
import {SkillsComponentToolbar} from "./parts/SkillsComponentToolbar";

const fetchSkillsMock = async (): Promise<Skill[]> => {
    return [{
        tech: {
            name: "React",
            link: "https://example.com",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
        },
        rating: 5,
        category: "Technologies"
    }, {
        tech: {
            name: "Zod",
            link: "https://example.com",
            icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
        },
        rating: 4,
        category: "Library"
    }, {
        tech: {
            name: "Material UI",
            link: "https://example.com",
            icon: "https://mui.com/static/logo.png",
        },
        rating: 1,
        category: "Library"
    }, {
        tech: {
            name: "ReactQuery",
            link: "https://example.com",
            icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
        },
        rating: 0,
        category: "Library"
    }, {
        tech: {
            name: "React",
            link: "https://example.com",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
        },
        rating: 5,
        category: "Technologies"
    }, {
        tech: {
            name: "Zod",
            link: "https://example.com",
            icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
        },
        rating: 4,
        category: "Library"
    }, {
        tech: {
            name: "Material UI",
            link: "https://example.com",
            icon: "https://mui.com/static/logo.png",
        },
        rating: 1,
        category: "Library"
    }, {
        tech: {
            name: "ReactQuery",
            link: "https://example.com",
            icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
        },
        rating: 0,
        category: "Library"
    }, {
        tech: {
            name: "React",
            link: "https://example.com",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
        },
        rating: 5,
        category: "Technologies"
    }, {
        tech: {
            name: "Zod",
            link: "https://example.com",
            icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
        },
        rating: 4,
        category: "Library"
    }, {
        tech: {
            name: "Material UI",
            link: "https://example.com",
            icon: "https://mui.com/static/logo.png",
        },
        rating: 1,
        category: "Library"
    }, {
        tech: {
            name: "ReactQuery",
            link: "https://example.com",
            icon: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
        },
        rating: 0,
        category: "Library"
    },]
}

const fetchSkills = fetchSkillsMock

const batchSkills = (skills: Skill[], size: number): Skill[][] => {
    return skills.length > size ? [skills.slice(0, size), ...batchSkills(skills.slice(size), size)] : [skills]
}

const skillsPerRow = 5

export const defaultFilterFunction = (_: Skill) => true
export type FilterFunction = typeof defaultFilterFunction

export const SkillsComponent: React.FC = () => {

    const {isLoading, isError, data, error} = useQuery<Skill[], Error>('skills', fetchSkills)

    const [skillFilter, setSkillFilter] = useState(() => defaultFilterFunction)


    if (isLoading || !data) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className={"project-panel"}>
            <SkillsComponentToolbar setCurrentFilter={(filter) => setSkillFilter(() => filter)}/>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableBody>
                        {batchSkills(
                            data.filter(skill => skillFilter(skill)).sort((a,b) => b.rating  - a.rating),
                            skillsPerRow
                        ).map((skills, index) => (
                            <SkillsComponentRow key={index} skills={skills} techsPerRow={skillsPerRow}/>)
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}