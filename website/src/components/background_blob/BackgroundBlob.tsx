import React, {useRef} from "react";
import './BackgroundBlob.css'

export const BackgroundBlob: React.FC<{}> = () => {
    const movingBackgroundBlob = useRef(null);

    document.body.onpointermove = event => {
        const {clientX, clientY} = event;
        if (movingBackgroundBlob.current) {
            // @ts-ignore
            movingBackgroundBlob.current.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, {duration: 3000, fill: "forwards"})

        }

    }


    return (
        <>
            <div ref={movingBackgroundBlob} className={"movingBackgroundBlob"}/>
            <div className={"movingBackgroundBlur"}/>
        </>
    )
}