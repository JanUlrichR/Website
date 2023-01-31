import React from "react";
import {IconButton, IconButtonProps, styled} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export const ButtonGroup: React.FC<{ expanded: boolean; handleExpandClick: () => void }> = ({expanded, handleExpandClick}) => {
    return (
        <div style={{display: "flex", flexDirection: "row-reverse", marginLeft: "auto"}}>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon/>
            </ExpandMore>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>




        </div>
    )
}