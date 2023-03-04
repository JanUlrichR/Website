import React, {useState} from "react";
import {Tab, Tabs, Typography, useTheme} from "@mui/material";
import {categories, Category, Skill} from "../types";
import {FilterFunction} from "../SkillsComponent";
import {alpha} from "@mui/material";
import {SkillsComponentScrollButton} from "./SkillsComponentScrollButton";
import {lighten} from "@mui/system/colorManipulator";

const allOption = "All"

type CategoryOptions = Category | typeof allOption
const options = [allOption, ...categories] as CategoryOptions[]
export const SkillsComponentCategories: React.FC<{ setCategoryFilter: (filterFunction: FilterFunction) => void }> = ({setCategoryFilter}) => {
    const [categoryIndex, setCategoryIndex] = useState(0)
    const theme = useTheme();


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCategoryIndex(newValue);
        const categoryValue = options[newValue]
        if (categoryValue === allOption) {
            setCategoryFilter((skill: Skill) => true)
            return
        }
        setCategoryFilter((skill: Skill) => skill.category === options[newValue])
    };

    return (
        <>
            <Tabs ScrollButtonComponent={props => <SkillsComponentScrollButton props={props}/>} value={categoryIndex}
                  variant="scrollable" scrollButtons onChange={handleChange} aria-label="label tabs force"
                  sx={{
                      "& button:hover": {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1)
                      },
                      "& button": {borderRadius: 2},


                  }}>
                {options.map(category => (
                    <Tab label={<Typography sx={{fontSize: "12px"}}>{category}</Typography>}/>
                ))}
            </Tabs>
        </>
    )
}