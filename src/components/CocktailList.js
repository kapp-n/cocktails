import React from 'react'
import Cocktail from './Cocktail'

const CocktailList = ({ cocktails, add }) => {
    let list = cocktails.map(drink => {
        return <Cocktail key={drink.id} click={add} cocktail={drink} />})
    
    return (
        <div className="List">
            <h1>Cocktails:</h1>
                <ul>
                    {list}
                </ul>
        </div>
    )
}

export default CocktailList