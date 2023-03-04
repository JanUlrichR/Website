import React from "react";
import {Link, Typography} from "@mui/material";

export const TitlePanel: React.FC<{ title: string; url: string }> = ({title, url}) => {
    return (
        <div>
            <Typography>{title}</Typography>
            <Link href={url} underline="hover">
                <Typography>{url}</Typography>
            </Link>
        </div>
    )
}