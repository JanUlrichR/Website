import React, {MouseEvent, useState} from "react";
import {Avatar, AvatarGroup, Paper, Tooltip, Typography, useTheme} from "@mui/material";
import {Tech} from "../types";

import "./../ProjectPanel.css"

const batchTechs = (techs: Tech[], size: number): Tech[][] => {
    return techs.length > size ? [techs.slice(0, size), ...batchTechs(techs.slice(size), size)] : [techs]
}

const getRelativePosition = (child: Element,parent: Element) => {
    const parentPos = child.getBoundingClientRect();
    const childPos  = parent.getBoundingClientRect();

    return {
        top: childPos.top - parentPos.top,
        right: childPos.right - parentPos.right,
        bottom: childPos.bottom - parentPos.bottom,
        left: childPos.left - parentPos.left
    }
}

const TechAvatar: React.FC<{ tech: Tech }> = ({tech}) => {
    return (
        <Tooltip title={tech.name} arrow>
            <a href={tech.link} style={{textDecoration: "none"}}>
                <Avatar style={{marginLeft: '-2px'}} src={tech.icon} imgProps={{
                    height: 50,
                    width: 50, sx: {
                        objectFit: "contain"
                    }
                }}>
                    <Typography>{tech.name}</Typography>
                </Avatar>
            </a>
        </Tooltip>
    )
}

export const TechGroup: React.FC<{ technologies: Tech[] }> = ({technologies}) => {

    const [showList, setShowList] = useState(false)
    const [position, setPosition] = useState([0, 0, 0])
    const theme = useTheme()

    const disableAdditionalTech = () => setShowList(false)

    const enableAdditionalTech = (mouseEvent: MouseEvent) => {
        const target = mouseEvent.target;
        if (target instanceof Element) {
            if (target.innerHTML.startsWith("+")) {
                const parentNode = target.parentNode as Element
                const grandNode = parentNode.parentNode as Element

                const relative = getRelativePosition(parentNode, grandNode)
                setShowList(true)
                setPosition([relative.left, relative.top+parentNode.clientHeight])
            }
        }
    }

    return (
        <div style={{position:"relative", overflow:"visible"}}>
            <AvatarGroup max={4} onMouseMove={enableAdditionalTech} onClick={enableAdditionalTech} sx={{
                '& .MuiAvatar-root': {border: 'none', background: 'none', color: theme.typography.body1.color},
            }}>
                {technologies.map((tech, index) => <TechAvatar key={index} tech={tech}/>)}
            </AvatarGroup>
            {showList && (
                <Paper onMouseLeave={disableAdditionalTech} elevation={3} className={"project-card-additional"}
                       style={{left: position[0] + "px", top: position[1] + "px"}}>
                    {batchTechs(technologies.slice(3), 4).map((techs, index) =>
                        <AvatarGroup max={4} sx={{
                            '& .MuiAvatar-root': {
                                border: 'none',
                                background: 'none',
                                color: theme.typography.body1.color
                            },
                        }} style={{flexDirection:"row", padding:"3px"}}>
                            {techs.map((tech, index) => <TechAvatar key={index} tech={tech}/>)}
                        </AvatarGroup>
                    )}
                </Paper>
            )}
        </div>
    )
}