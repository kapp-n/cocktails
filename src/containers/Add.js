import React, { Component } from 'react'
import CocktailList from '../components/CocktailList'

export default class Add extends Component {


    state={
        drinks: [],
        selection: ''

    }

    handleChange = (e) => {
        this.setState({
            selection: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.selection}`)
        .then(res => res.json())
        .then(response =>{
            let six = response.drinks.slice(0,6)
            //console.log(six)
            this.setState({
                drinks: six
            })
            
        })
    }



    render() {
        return (
            <div className="Add">
                <h1>Add a drink!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Choose an alcohol type:</label>
                        <select name="cocktails" id="cocktails" onChange={this.handleChange}>
                            <option value="Gin">Gin</option>
                            <option value="Tequila">Tequila</option>
                            <option value="Vodka">Vodka</option>
                            <option value="Whiskey">Whiskey</option>
                        </select>
                      <input type="submit" value="Go!"/>
                </form>
                <hr/>
                <CocktailList cocktails={this.state.drinks} />
            </div>
        )
    }
}
