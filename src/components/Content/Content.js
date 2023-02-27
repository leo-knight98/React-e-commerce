import React, { useEffect, useContext, useState } from 'react';
import {ProductContext} from '../../context/ProductContext';
import './Content.css'
function Content() {
    // carreto es crea al context per poder-lo compartir amb altres components
    const {carreto, setCarreto} = useContext(ProductContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost/files/p3cataleg1.php')
        .then ((res) => res.json())
        .then ((data) => {
            setData(data)})
        .catch ((error) => console.log(error))
    }, [])
    return (
        <>
        <div className='catalog'>
            {   
                data && data.length > 0 && data.map((product, i) => {
                    return <div key={product.pid} className='product'>
                        <div>
                            <div className='product-header'>
                                <p>{product.marca}</p>
                                <p>{product.model}</p>
                            </div>
                            <img src={`img/${product.imatge}`} alt='imatge-producte'></img>
                            <div className='detalls'><p>Veure detalls</p></div>
                            <p className='preu'>Preu: {product.preu}</p>
                            <button type='button' className='compra' onClick={() => {
                                if(!carreto.includes(product)) {
                                    setCarreto([...carreto, product])
                                }
                            }}>Comprar</button>
                        </div>
                    </div>
                })
            }
            </div>
        </>
    )
}

export default Content