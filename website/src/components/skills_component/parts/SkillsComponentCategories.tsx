import React, {useState} from "react";
import {Tab, Tabs, Typography} from "@mui/material";
import {categories, Category, Skill} from "../types";
import {FilterFunction} from "../SkillsComponent";

const allOption = "All"

type CategoryOptions = Category | typeof allOption
const options = [allOption, ...categories] as CategoryOptions[]
export const SkillsComponentCategories: React.FC<{setCategoryFilter: (filterFunction : FilterFunction) => void}> = ({setCategoryFilter}) => {
    const [categoryIndex, setCategoryIndex] = useState(0)



    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCategoryIndex(newValue);
        const categoryValue = options[newValue]
        if (categoryValue === allOption){
            setCategoryFilter((skill: Skill) => true)
            return
        }
        setCategoryFilter((skill: Skill) => skill.category === options[newValue])
    };

    return (
        <>
            <Tabs selectionFollowsFocus value={categoryIndex} variant="scrollable" scrollButtons onChange={handleChange} aria-label="label tabs force selectionFollowsFocus ">
                {options.map(category => (
                    <Tab label={<Typography sx={{fontSize:"12px"}}>{category}</Typography>}/>
                ))}
            </Tabs>
        </>
    )
}