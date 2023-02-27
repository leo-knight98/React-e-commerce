import React, { useEffect, useContext, useState } from 'react';

function Product({producte}) {
    return(
        <tr>
            <td>{producte.pid}</td>
            <td><img src={`img/${producte.imatge}`}></img></td>
            <td>{producte.marca} {producte.model}</td>
            <td><input type='number' className='quantity' id='quantity'></input></td>
            <td>{producte.preu}</td>
            <td></td>
        </tr>
    )
}

export default Product;