import React from 'react'

const Cocktail = ({ cocktail, click }) => {

const handleDrinks = () => {
    click(cocktail)

}

    return (
        <div className="Cocktail">
            <ul>
                <li>
                <h3>{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb + '/preview'} alt="cocktail"/>
                <br />
                <button onClick={handleDrinks} className="button">Add to Menu</button>
                </li>

            </ul>
        </div>
    )
}

export default Cocktail