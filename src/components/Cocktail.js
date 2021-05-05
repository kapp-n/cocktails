import React from 'react'

const Cocktail = ({ cocktail }) => {
    return (
        <div className="Cocktail">
            <ul>
                <li>
                <h3>{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb + '/preview'} alt="cocktail"/>
                </li>
            </ul>
        </div>
    )
}

export default Cocktail