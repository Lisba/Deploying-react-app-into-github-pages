import React, {useState, Fragment} from 'react';

const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const activarContador = () => {
        setCounter(counter+1);
    }
    
    return(
        <Fragment>
            <h1>Usted ha clickeado {counter} veces!</h1>
            <button onClick={activarContador}>Sumar</button>
        </Fragment>
    )
}

export default Counter;