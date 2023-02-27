import React, { useEffect, useContext, useState } from 'react';
import {ProductContext} from '../../context/ProductContext';
import FullCart from '../FullCart/FullCart';
import './miniCart.css'

function MiniCart() {
    const {carreto, setCarreto} = useContext(ProductContext)
    const [display, setDisplay] = useState(false)

    return (
        <>
            <button className='buttonCart' onClick={function() {
                if(!display) {
                    setDisplay(true)
                } else {
                    setDisplay(false)
                }
            }}>
                {carreto.length}
                <img src='img/shopping-cart.svg'></img>
            </button>
            <FullCart display={display}></FullCart>
        </>
    )
}
export default MiniCart