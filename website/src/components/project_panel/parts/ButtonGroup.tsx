import React from "react";
import {IconButton, IconButtonProps, styled, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {EducationAdditionalInformation} from "../../cv_table/types";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const ButtonGroup: React.FC<{ expanded: boolean; handleExpandClick: () => void }> = ({
                                                                                                expanded,
                                                                                                handleExpandClick
                                                                                            }) => {
    return (
        <div style={{display: "flex", flexDirection: "row-reverse", marginLeft: "auto"}}>
            <div className={"cv-icon-column"}>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon color={"primary"}/>
                </ExpandMore>
                <Typography></Typography>
            </div>
            <div className={"cv-icon-column"}>
                <IconButton aria-label="share">
                    <ShareIcon color={"primary"}/>
                </IconButton>
                <Typography></Typography>
            </div>
            <div className={"cv-icon-column"}>
                <IconButton aria-label="add to favorites">
                    <StarOutlineIcon color={"primary"}/>
                </IconButton>
                <Typography>({200})</Typography>
            </div>


        </div>
    )
}