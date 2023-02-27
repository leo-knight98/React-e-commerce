import React, {useEffect, useState} from 'react'
import './Aside.css'

function Aside() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost/files/filtres.php')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
        .catch((err) => console.log(err))
    })

    /*let arrFilter = [[]]
    Object.entries(data).forEach((el) => {
        const arr1 = Object.values(el[1])
        const arr2 = []
        arr1.forEach((filter) => {
            arr2.push(Object.values(filter))
        })
        const arr3 = [el[0], arr2]
        arrFilter.push(arr3)
    })
    
    return (
        <div className='aside'>
            {arrFilter.forEach((filter) => {
                return(<p>{filter[0]}</p>);
            })}
        </div>
    )*/
    return (
        <>
            <div className='aside'>
            {
                Object.keys(data).map((key, index) => {
                    return(
                        <div key={index} id={key}>
                            <h3>{key}</h3>
                            {
                                Object.entries(data[key]).forEach((element) => {
                                    
                                })
                            }
                            
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}
    


export default Aside;