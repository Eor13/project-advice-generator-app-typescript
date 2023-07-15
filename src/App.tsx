import './App.css'

function App() {
  // 2. Criar funções que buscam os dados na API.
  async function adviceGenerator() {
    const url = "	https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const aa = await response.json()
    console.log(aa)
    return aa
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
  async function () {
    const generator = await adviceGenerator()
    const numberId = await searchAdvice(generator.slip.id)
    //type e text
    // const advice = await searchAdviceMessage(generator.message) 
    // console.log(advice.message)
    
    const showAdvice = numberId.slip.advice
    const showId = numberId.slip.id
  }

  return (
    <>
      <section className="advice-card">
        <h3 id="tittle" >Advice <span className="number-advice" ></span></h3>
        <p id="advice" ></p>
        <picture>
          <source media="(max-width: 375px)" src="./images/pattern-divider-mobile.svg"/>
          <img className="line" src="src/images/pattern-divider-desktop.svg" alt=""/>
        </picture>
        <button className="btn">
          <img className="btn-image" src="src/images/icon-dice.svg" alt=""/>
        </button>
      </section>
    </>
  )
}

export default App
