import React, {useEffect, useState} from "react";
import {SkillsComponentSearch} from "./SkillsComponentSearch";
import {SkillsComponentCategories} from "./SkillsComponentCategories";
import "./../SkillsComponent.css"
import {Skill} from "../types";
import {defaultFilterFunction, FilterFunction} from "../SkillsComponent";


export const SkillsComponentToolbar: React.FC<{ setCurrentFilter: (filterFunction: FilterFunction) => void }> = ({setCurrentFilter}) => {
    const [categoryFilter, setCategoryFilter] = useState(() => defaultFilterFunction)
    const [searchFilter, setSearchFilter] = useState(() => defaultFilterFunction)

    useEffect(() => {
        const aggregatedFilter = (skill: Skill) => categoryFilter(skill) && searchFilter(skill)
        setCurrentFilter(aggregatedFilter)
    }, [categoryFilter, searchFilter])

    return (
        <div className={"skill-toolbar"}>
            <SkillsComponentCategories setCategoryFilter={(filter) => setCategoryFilter(() => filter)}/>
            <SkillsComponentSearch setSearchFilter={(filter) => setSearchFilter(() => filter)}/>
        </div>
    )
}