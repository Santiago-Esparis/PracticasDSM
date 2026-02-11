import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//
// Componentes
//
import InputNumber from "./Components/Inputs.jsx"
import Operators from "./Components/Operaciones.jsx"
import ClearButton from './Components/Clear.jsx'
import OperacionActual from './Components/OperacionActual.jsx'
import Resultado from "./Components/Resultados.jsx"



function App() {

  // Inputs.jsx
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  // Operaciones.jsx
  const [operacion, setOperacion] = useState(null)  // Null --> Estado por defecto

  // Operaciones.jsx --> Clear
  const clearAll = () => {
    setA(0)
    setB(0)
    setOperacion(null)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">

      {/* Header */}
      <header className="bg-dark text-light py-3">
        <div className="container text-center">
          <h2>Calculadora React</h2>
        </div>
      </header>

      {/* Cuerpo -- Calculadora */}
      <div className="container-lg py-5 flex-grow-1">

        {/* Inputs -- A y B */}
        <div className="row g-4 justify-content-center mb-4">

          <div className="col-sm-6 col-lg-3">
            <div className="card p-4 shadow-sm text-center">
              <InputNumber label="A" valor={a} setValor={setA} />
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card p-4 shadow-sm text-center">
              <InputNumber label="B" valor={b} setValor={setB} />
            </div>
          </div>

        </div>

        {/* Botones -- (+ - * /) */}
        <div className="row mb-5">
          <div className="col text-center">
            <div className="card p-3 shadow-sm">
              <Operators operacion={operacion} setOperacion={setOperacion} />
            </div>
          </div>
        </div>

        {/* Parte Resultados */}
        <div className="row mb-3">
          <div className="col text-center">
            <h4>Resultados</h4>
            <hr />
          </div>
        </div>

        {/* Resultado Operaciones y Operación Actual */}
        <div className="row g-4 justify-content-center align-items-stretch mb-4">

          <div className="col-sm-6 col-lg-3 d-flex">
            <div className="card p-4 shadow-sm text-center h-100 w-100">
              <Resultado a={a} b={b} operacion={operacion} />
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 d-flex">
            <div className="card p-4 shadow-sm text-center h-100 w-100">
              <OperacionActual operacion={operacion} />
            </div>
          </div>

        </div>

        {/* Botón Clear */}
        <div className="row">
          <div className="col text-center">
            <div className="card p-3 shadow-sm">
              <ClearButton clearAll={clearAll} />
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <small>Santiago Esparis © 2026 UPNA</small>
        </div>
      </footer>

    </div>
  )

}

export default App
