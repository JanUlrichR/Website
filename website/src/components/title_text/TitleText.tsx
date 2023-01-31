import React, {useEffect, useState} from 'react';
import {wait} from "@testing-library/user-event/dist/utils";

const prefixText = "This is ";
const alternatives = [
    "AAAAAAAAAAAAA",
    "BBBBBBBBBBBBB",
    "CCCCCCCCCCCCC",
    "DDDDDDDDDDDDD",
]

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const timePerIteration = 80
const iterationsPerLetter = 4
const waitAfterCompletion = 2000

export const TitleText: React.FC<{}> = () => {
    const [hackyText, setText] = useState("")
    const [alternativeIndex, setAlternativeIndex] = useState(0)

    const setNextAlternative = () => setAlternativeIndex(curr => (curr + 1) % alternatives.length)


    const rerenderText = (originalText: string, iterations: number) => {
        const newText = originalText.split("").map((it, index) => {
            if (index < iterations) {
                return originalText[index]
            }
            return LETTERS[Math.floor(Math.random() * 26)]
        }).join("")
        setText(newText)
    }

    useEffect(() => {
        let iterations = 0
        const interval = setInterval(
            () => {
                const currentAlternative = alternatives[alternativeIndex]
                rerenderText(currentAlternative, iterations / iterationsPerLetter);
                iterations += 1
                if (iterations / iterationsPerLetter - 1 > currentAlternative.length) {
                    clearInterval(interval)
                    wait(waitAfterCompletion).then(r =>  setNextAlternative())
                }
            },
            timePerIteration
        );
        return () => clearInterval(interval)
    }, [alternativeIndex])

    return (
        <div className={"title-text"}>
            {prefixText + hackyText}
        </div>
    )
}


