import { Form } from "react-bootstrap"



/* 
*   InputNumber props
*
*       - Valor     --> Número actual
*       - setValor  --> Contenido o Valor para definir (setter)
*       - label     --> Texto a enseñar
*
*
*       InputNumber crea un Forms que permite introducir un número real
*
*/


function InputNumber({ valor, setValor, label }) {

    return (

        <div className="d-flex flex-column align-items-center">

            <h5 className="mb-3">{label}</h5>

            <input
                type="number"
                className="form-control text-center w-75"
                value={valor}
                onChange={e => setValor(Number(e.target.value))}
            />

        </div>
    
    )

}

export default InputNumber
