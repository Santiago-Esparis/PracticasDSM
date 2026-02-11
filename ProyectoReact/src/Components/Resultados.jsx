

/* 
*   Resultado props
*
*       - a         --> Número 1
*       - b         --> Número 2
*       - operacion --> Operación a realizar
*
*
*       Resultado realiza el calculo solicitado por el usuario y muestra el resultado en pantalla
*
*/


function Resultado ( {a, b, operacion} ) {

    let resultado = ''

    switch (operacion) {
        case '+': resultado = a + b; break
        case '-': resultado = a - b; break
        case '*': resultado = a * b; break
        case '/': resultado = a / b; break

        default: resultado = ''
    }

    return (

        <h4 className="mb-0">
            <b>Resultado:</b> {resultado}
        </h4>
    
    )
}

export default Resultado