import { useState, useEffect } from "react";
import { adviceGenerator, searchAdvice } from "../service/handleApi";
import iconBtn from "../images/icon-dice.svg";
import patternDesktop from "../images/pattern-divider-desktop.svg";
import patternMobile from "../images/pattern-divider-mobile.svg";
import * as S from "./style/style";


const Show = () => {
    const [showAdvice, setShowAdvice] = useState(
        {slip: {
                id:"",
                advice:"" 
            }}
    )
    const changAdvice = async () => {
        const generator = await adviceGenerator()
        const numberId = await searchAdvice(generator.slip.id)
        setShowAdvice(numberId)
    }

    useEffect(() => { changAdvice() }, [])

    return (
        <S.AdviceCard>
            <S.Tittle>Advice #<span className="number-advice" >{showAdvice.slip.id}</span></S.Tittle>
            <S.Advice>{showAdvice.slip.advice}</S.Advice>
            <picture>
                <source media="(max-width: 375px)" src={patternMobile} />
                <S.Line src={patternDesktop} />
            </picture>
            <S.Btn onClick={changAdvice}>
                <S.BtnImage src={iconBtn} alt="Clique" />
            </S.Btn>
        </S.AdviceCard>
    )
}

export { Show }