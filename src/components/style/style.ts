import { styled } from "styled-components"

const AdviceCard = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-background-card);
    border-radius: 10px;
    max-width: 450px;
    margin: 20px;
    padding: 40px 20px;
    position: relative;
    @media(max-width:375px){
        max-width: 320px;
        margin: 10px;
    }
`
const Tittle = styled.h3`
    color: var(--color-prime);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 5px;
`
const Advice = styled.p`
    font-size: 20px;
    font-weight: 800;
    padding: 20px;
    text-align: center;
    font-size: 2.5rem;
    @media(max-width:375px){
        padding: 0;
        padding-top: 20px;
        font-size: 2rem;
    }
`
const Line = styled.img`
    padding: 20px;
    max-width: 450px;
    @media(max-width:375px){
        max-width: 320px;
    }
`

const Btn = styled.button`
    position: absolute;
    top: 92%;
    background-color: var(--color-prime);
    padding: 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 20px 2px var(--color-prime);
    }
`
const BtnImage = styled.img`
    width: 20px;
    height: 20px;

`

export {AdviceCard, Tittle, Line, Btn, BtnImage, Advice}