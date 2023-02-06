import React, {useState} from "react";
import {Box, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Skill} from "../types";
import {FilterFunction} from "../SkillsComponent";


export const SkillsComponentSearch: React.FC<{ setSearchFilter: (filterFunction: FilterFunction) => void }> = ({setSearchFilter}) => {
    const [searchText, setSearchText] = useState("")

    const onTextChange = (text: string) => {
        setSearchText(text)
        if (text === "") {
            setSearchFilter((skill: Skill) => true)
            return
        }
        setSearchFilter((skill: Skill) => skill.category.toLowerCase().includes(text.toLowerCase()) || skill.tech.name.toLowerCase().includes(text.toLowerCase()))
    }

    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <SearchIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Search" variant="standard" value={searchText}
                           onChange={(e) => onTextChange(e.target.value)}/>
            </Box>
        </>
    )
}