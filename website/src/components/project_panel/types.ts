import {z} from "zod";

const Tech = z.object({
    name: z.string(),
    link: z.string().url(),
    icon: z.string().url(),
});

const Project = z.object({
    projectId: z.string(),
    title: z.string(),
    url: z.string().url(),
    description: z.string(),
    previewImage: z.string().url(),
    techs: z.array(Tech)
});


export type Tech = z.infer<typeof Tech>;
export type Project = z.infer<typeof Project>;

Tech.parse({username: "Ludwig"});