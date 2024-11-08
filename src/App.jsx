import { useState } from "react"

export default function App() {
  //VARIAVEL DE ESTADO
  const [primeiroValor, setSegundoValor] = useState()
  return (
    <main>
      <h1>Calculadora</h1>
      <input type="number" placeholder="Insira um número"/>
      <input type="number" placeholder="Insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}