import { Button } from "react-bootstrap"


/* 
*   ClearButton props
*
*       - clearAll  --> Variables de Input y Operacion
*
*
*       Al pulsar ClearButton, se resetean los valores de los dos inputs A y B junto con la Operación que haya seleccionada. 
*
*/

function ClearButton({ clearAll }) {

    return (

        <Button variant="danger" onClick={clearAll}>
            Clear
        </Button>

    )

}


export default ClearButton