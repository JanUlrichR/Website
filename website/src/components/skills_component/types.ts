import {z} from "zod";

export const MAX_SKILL_LEVEL = 5

export const categories = ["Languages", "Technologies", "Library", "Tools" ,"Others"] as const

const Category = z.enum(categories)

export type Category =  z.infer<typeof Category>

const Tech = z.object({
    name: z.string(),
    link: z.string().url(),
    icon: z.string().url(),
});

const Skill = z.object({
    tech: Tech,
    rating: z.number().gt(0).lte(MAX_SKILL_LEVEL).int(),
    category: Category
});


export type Skill = z.infer<typeof Skill>;