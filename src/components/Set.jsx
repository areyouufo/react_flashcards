import { Card } from "./Card";

import data from "../data.json";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './Set.css'

export function Set() {
    const param = useParams();
    console.log(param.id)
    const location = useLocation()
    const set = location.state.set
    let cards = data.filter((item)=>(item.setName === set))
    const [step,setStep] = useState(0);
    const handleNext = () => {
        if(step < cards.length - 1){
            setStep(step + 1);
        }   

    }
    const handlePrev = () => {
        if(step > 0){
            setStep(step - 1);
        }
    }

    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back} key={cards[step].id} />
            <div className="arrows">
                <button onClick={handlePrev} disabled = {step == 0 ? true : false} >&lt;</button>
                <p>{step + 1} / {cards.length}</p>
                <button onClick={handleNext} disabled = {step == cards.length - 1 ? true : false}>&gt;</button>
            </div>
        </div>
    )
}