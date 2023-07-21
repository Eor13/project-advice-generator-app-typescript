async function adviceGenerator() {
    const url: string = `https://api.adviceslip.com/advice`
    const response = await fetch(url)
    return await response.json()
}

async function searchAdvice(slip_id: string){
    const url: string = `https://api.adviceslip.com/advice/${slip_id}`
    const response = await fetch(url)
    return await response.json()
}


export { adviceGenerator, searchAdvice }