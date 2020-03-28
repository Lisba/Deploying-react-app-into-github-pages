import React, {useState, Fragment} from 'react';

const SumarArray = () => {
    
    const [array, setArray] = useState([1, 2, 3, 4]);
    
    const [numero, setNumero] = useState(5);
    
    const sumarArray = () => {
        setNumero(numero+1);
        setArray([...array, numero])
    }
    
    return(
        <Fragment>
            <button onClick={sumarArray}>SumarArray</button>
            <ul>
                {
                    array.map((item, index) => {
                        return <li key={index}>{item} - {index}</li>
                    })
                }    
            </ul>
        </Fragment>
    )
}

export default SumarArray;