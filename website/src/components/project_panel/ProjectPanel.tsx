import React from 'react';
import {useQuery} from "react-query";
import {Project} from "./types";
import {ProjectInformation} from "./parts/ProjectInformation";
import "./ProjectPanel.css"

const fetchProjectsMock = async (): Promise<Project[]> => {
    return [
        {
            projectId: "123",
            title: "Website",
            url: "https://example.com",
            description: "A small website",
            previewImage: {},
            techs: [
                {
                    name: "React",
                    link: "https://example.com",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
                }, {
                    name: "Zod",
                    link: "https://example.com",
                    icon: "https://example.com",
                }, {
                    name: "React",
                    link: "https://example.com",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
                }, {
                    name: "Zod",
                    link: "https://example.com",
                    icon: "https://example.com",
                }, {
                    name: "React",
                    link: "https://example.com",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
                }, {
                    name: "Zod",
                    link: "https://example.com",
                    icon: "https://example.com",
                }

            ]
        },
        {
            projectId: "12314",
            title: "Website2",
            url: "https://example.com",
            description: "A smaller website",
            previewImage: {},
            techs: [
                {
                    name: "Material UI",
                    link: "https://example.com",
                    icon: "https://example.com",
                }, {
                    name: "ReactQuery",
                    link: "https://example.com",
                    icon: "https://example.com",
                },{
                    name: "Material UI",
                    link: "https://example.com",
                    icon: "https://example.com",
                }, {
                    name: "ReactQuery",
                    link: "https://example.com",
                    icon: "https://example.com",
                },{
                    name: "Material UI",
                    link: "https://example.com",
                    icon: "https://example.com",
                }, {
                    name: "ReactQuery",
                    link: "https://example.com",
                    icon: "https://example.com",
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
            {data.map((project, index) => (
                <ProjectInformation key={index}  project={project}/>
            ))}
        </div>
    )
}


