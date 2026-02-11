import { Button } from "react-bootstrap"


/* 
*   Operators props
*
*       - operacion     --> Operación actual
*       - setOperacion  --> Contenido o Operacion para definir (setter)
*
*       Operators define una serie de botones con los operadores matematicos permitidos
*       
*/

function Operators ( { operacion, setOperacion } ) {

    const operators = ['+', '-', '*', '/']

    return (
        <div className="d-flex justify-content-center gap-3">
            {operators.map(op => (
                <Button
                    key={op}
                    variant={operacion === op ? "primary" : "secondary"}
                    onClick={() => setOperacion(op)}
                >
                    {op}
                </Button>
            ))}
        </div>
    )
    

}

export default Operators