import React, {MouseEvent, useState} from "react";
import {Avatar, AvatarGroup, List, ListItem, ListItemAvatar, Paper, Tooltip} from "@mui/material";
import {Tech} from "../types";

import "./../ProjectPanel.css"

const padding = 8

const TechAvatar: React.FC<{ tech: Tech }> = ({tech}) => {
    return (
        <a href={tech.link} style={{textDecoration: "none"}}>
            <Avatar style={{marginLeft: "-8px"}}>
                <Tooltip title={tech.name} arrow>
                    <div>{tech.name}</div>
                </Tooltip>
            </Avatar>
        </a>
    )
}

export const TechGroup: React.FC<{ technologies: Tech[] }> = ({technologies}) => {

    const [showList, setShowList] = useState(false)
    const [position, setPosition] = useState([0, 0, 0])

    const disableAdditionalTech = () => setShowList(false)


    const clickAdditionalTech = (mouseEvent: MouseEvent) => {
        const target = mouseEvent.target;
        if (target instanceof Element) {
            if (target.innerHTML.startsWith("+")) {
                setShowList(val => !val)
                const rect = target.getBoundingClientRect()
                setPosition([rect.left - padding, rect.top + rect.height, rect.width + 2 * padding])
            }
        }
    }

    return (
        <div>
            <AvatarGroup max={4} onClick={clickAdditionalTech}>
                {technologies.map((tech,index) => <TechAvatar key={index} tech={tech}/>)}
            </AvatarGroup>
            {showList && (
                <Paper onMouseLeave={disableAdditionalTech} elevation={3} className={"project-card-additional"}
                       style={{left: position[0] + "px", top: position[1] + "px", width: position[2] + "px"}}>
                    <List>
                        {technologies.slice(3).map((tech,index) =>
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <TechAvatar tech={tech}/>
                                </ListItemAvatar>
                            </ListItem>)
                        }
                    </List>
                </Paper>
            )}
        </div>
    )
}