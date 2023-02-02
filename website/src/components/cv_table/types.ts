

import {number, string, z} from "zod";

const WorkStationType = z.enum(["Education", "Work", "Others"]);

const EducationAdditionalInformation = z.object({
    finalGrade : number().gte(0).lte(15),
    certificateLink : string().url()
})

const WorkAdditionalInformation = z.object({

})

const OthersAdditionalInformation = z.object({
    reason: string()
})

const WorkStationLocation = z.object({
    country: z.string(),
    city: z.string(),
    address: z.string()
})

const WorkStation = z.object({
    workStationId: z.string(),
    from: z.date(),
    to: z.optional(z.date()),
    type: WorkStationType,
    name: z.string(),
    description: z.string(),
    location:WorkStationLocation,
    logo: z.string().url(),
    additionalInformation: z.union([
        WorkAdditionalInformation,
        EducationAdditionalInformation,
        OthersAdditionalInformation
    ])
});


export type EducationAdditionalInformation = z.infer<typeof EducationAdditionalInformation>;
export type WorkAdditionalInformation = z.infer<typeof WorkAdditionalInformation>;
export type OthersAdditionalInformation = z.infer<typeof OthersAdditionalInformation>;
export type WorkStationType = z.infer<typeof WorkStationType>;
export type WorkStation = z.infer<typeof WorkStation>;
