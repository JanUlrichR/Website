import React from "react";
import {MAX_SKILL_LEVEL, Skill} from "../types";
import {Avatar, Badge, styled, Tooltip, Typography} from "@mui/material";

import "./../SkillsComponent.css"

interface StyledBadgeProps {
    badgeColor: string
}

const StyledBadge = styled(Badge, {
    shouldForwardProp: (prop) => prop !== "badgeColor",
})<StyledBadgeProps>(({theme, badgeColor}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: badgeColor,
        color: badgeColor,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const getColor = (skillrating: number) => {
    switch (skillrating) {
        case 1:
            return '#4da929'
        case 2:
            return '#8ac720'
        case 3:
            return '#c9b342'
        case 4:
            return '#bd3e3e'
        case 5:
            return '#ee0808'
        default:
            return '#9748ee'
    }
}


const SkillAvatar: React.FC<{ skill: Skill }> = ({skill}) => {
    const tooltipText = <div className={"skill-item-tooltip"}><div>{skill.tech.name}</div>
        <br/><div>({skill.rating}/{MAX_SKILL_LEVEL})</div>
    </div>

    return (
        <>
            <Tooltip title={tooltipText} arrow>
                <a href={skill.tech.link} style={{textDecoration: "none"}}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                        variant="dot"
                        badgeColor={getColor(skill.rating)}
                    >
                        <Avatar src={skill.tech.icon} imgProps={{
                            height: 50,
                            width: 50, sx: {
                                objectFit: "contain"
                            }
                        }}>
                            <div>{skill.tech.name}</div>
                        </Avatar>
                    </StyledBadge>
                </a>
            </Tooltip>
            <Tooltip title={tooltipText} arrow>
                <div>{skill.tech.name}</div>
            </Tooltip>
        </>
    )
}

export const SkillsComponentItem: React.FC<{ skill: Skill }> = ({skill}) => {
    return (
        <SkillAvatar skill={skill}/>
    )
}