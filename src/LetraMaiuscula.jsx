import React, { useState } from "react";

function Foi() {

    const [contador, mudanum] = useState(0)
    function soma() { mudanum(contador + 1 ) }
    function menos() { mudanum(contador - 1) }

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={menos}>-</button>
            <button onClick={soma}>+</button>
        </div>
    
    )

}
export default Foi