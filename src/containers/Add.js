import React, { Component } from 'react'
import AddForm from '../components/AddForm'

export default class Add extends Component {

    state={
        name: '',
        ingredients: '',
        measurements: '',
        glass: '',
        instructions: ''
    }


    handleSubmit = (e) =>{
        e.preventDefault()
        fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`)
        .then(res => res.json())
        .then(drink =>{
            console.log(drink)
        })
    }
    render() {
        return (
            <div className="Add">
                <h1>Add a Drink</h1>
                <br/>
                <AddForm submit={this.handleSubmit} />
                <hr/>


            </div>
        )
    }
}
