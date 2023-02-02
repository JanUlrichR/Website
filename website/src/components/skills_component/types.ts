import {z} from "zod";

export const MAX_SKILL_LEVEL = 5

const Tech = z.object({
    name: z.string(),
    link: z.string().url(),
    icon: z.string().url(),
});

const Skill = z.object({
    tech: Tech,
    rating: z.number().gt(0).lte(MAX_SKILL_LEVEL).int(),
});


export type Skill = z.infer<typeof Skill>;