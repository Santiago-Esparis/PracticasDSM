

/* 
*   OperacionActual props
*
*       - operacion --> Ultima operación seleccionada
*
*
*       OperacionActual muestra en pantalla el último operador seleccionado 
*
*/


function OperacionActual ( { operacion } ) {

    return (
        
        <h4 className="mb-0">
            <b> Operación Actual: </b> {operacion ?? "Ninguna"}
        </h4>
    
    )

}

export default OperacionActual