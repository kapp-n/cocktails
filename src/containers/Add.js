import React, { Component } from 'react'
import CocktailList from '../components/CocktailList'

export default class Add extends Component {


    state={
        drinks: [],
        menu: [],
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
            console.log(six)
            this.setState({
                drinks: six
            })
            
        })
    }

    addToMenu = (cocktail) => this.setState({menu: cocktail}, this.postToDB)


    postToDB = () => {
        fetch('http://localhost:3001/menu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.menu)
        })
        .then(res => res.json())
        .then(data => console.log(data) )
        console.log('menu')
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
                      <input type="submit" value="Submit"/>
                </form>
                <hr className="hr"/>
                <CocktailList add={this.addToMenu} cocktails={this.state.drinks} />
                
            </div>
        )
    }
}
