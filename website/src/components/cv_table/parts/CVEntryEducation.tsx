import React from "react";
import {EducationAdditionalInformation} from "../types";
import fileDownload from 'js-file-download'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

export const CVEntryEducation: React.FC<{title:string,description:string,educationInformation: EducationAdditionalInformation}> = ({title, description,educationInformation}) => {

    const downloadFileName = `Certificate_${title.replaceAll(" ","_")}.pdf`

    const handleDownload = (url : string, fileName : string) => {
        fetch(url, {mode: "no-cors"}).then( res => {
            return res.blob().then(data => fileDownload(data, fileName))
        })
    }

    return (
            <><SimCardDownloadIcon onClick={() => handleDownload(educationInformation.certificateLink, downloadFileName)}/></>
    )
}