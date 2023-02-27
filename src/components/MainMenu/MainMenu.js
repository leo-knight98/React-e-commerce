import React from 'react';
function MainMenu() {
    // Habitualment es fa amb una consulta AJAX a la base de dades
    const menu = ['Inici', 'Productes', 'Contacte', 'Carretó', 'Login'];
    return (
        <ul>
            {
                menu.map((item) => {
                    return <div key={item}>{item}</div>
                })
            }
        </ul>
    )
}
export default MainMenu;