// 1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.
const btn = document.getElementById('btn')
const numberAdvice = document.querySelector('.number-advice')
const adviceView = document.querySelector('#advice')

// 2. Criar funções que buscam os dados na API.
async function adviceGenerator() {
    const url = "	https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json()
}
adviceGenerator()

// 3. Após pegar os dados da API, crie funções que buscam.
async function searchAdviceMessage(query){
    const url = `https://api.adviceslip.com/advice/search/${query}`
    const response = await fetch(url)
    return await response.json()
}

async function searchAdvice(slip_id){
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    const response = await fetch(url)
    return await response.json() 
}
// 4. Criar função que dentificam separadamente de ID e Advice.
// 5. Criar uma conexão do clique do botão com as variáveis.
btn.addEventListener('click', async function () {
    const generator = await adviceGenerator()
    const numberId = await searchAdvice(generator.slip.id)
    //type e text
    // const advice = await searchAdviceMessage(generator.message) 
    // console.log(advice.message)
    
    const showAdvice = numberId.slip.advice
    const showId = numberId.slip.id
    
    numberAdvice.innerHTML = ` #${showId}`
    adviceView.innerText = ` "${showAdvice}" `
})