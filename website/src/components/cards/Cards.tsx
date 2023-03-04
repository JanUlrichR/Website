import React, {useRef} from "react";
import './Cards.css'

export const Cards: React.FC<{ children: React.ReactNode[] }> = ({children}) => {
    const cardsWrapper = useRef(null);
    const cardRefs = useRef([])

    document.body.onpointermove = event => {
        const {clientX, clientY} = event;
        if(cardRefs.current){
            cardRefs.current.map(card => {
                // @ts-ignore
                const rect = card.getBoundingClientRect();

                const x = clientX - rect.left;
                const y = clientY - rect.top;

                // @ts-ignore
                card.style.setProperty('--xpos', `${x}px`);
                // @ts-ignore
                card.style.setProperty('--ypos', `${y}px`);

            })
        }
    }


    return (
        <div ref={cardsWrapper} className={'cards'}>
            {
                // @ts-ignore
                children.map((child, index) => <div className={"card"} ref={el => cardRefs.current[index] = el}>
                    <div className={'card-border'}><div className={'card-content'}>{child}</div></div>
                </div>)}
        </div>
    )
}