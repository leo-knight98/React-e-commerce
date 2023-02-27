import React, { useEffect, useContext, useState } from 'react';
import {ProductContext} from '../../context/ProductContext';
import Product from '../Product/Product';
import './fullCart.css';

function FullCart(props) {
    const {carreto, setCarreto} = useContext(ProductContext)
    const display = props.display
    if(display) {
        return(
            <>
                <table className='cart'>
                    <thead>
                        <tr>
                            <td>Ref.</td>
                            <td>Imatge</td>
                            <td>Descripció</td>
                            <td>Quantitat</td>
                            <td>Preu</td>
                            <td>Import</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carreto.map(element => {
                                return(<Product key={element.pid} producte={element} />)
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    } else {
        return(<></>)
    }
    
}

export default FullCart