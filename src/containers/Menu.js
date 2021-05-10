import React, { Component } from 'react'
import MenuItem from '../components/MenuItem'




export default class Menu extends Component {

    state={
        menu: []

    }

    componentDidMount() {
        fetch('http://localhost:3001/menu')
        .then(res => res.json())
        .then(data => {
            this.setState({
                menu: data
            })
        })
    }



    render() {
        let drinks = this.state.menu.map(drink => {
            return (
             <div className="drinks">
                 <MenuItem id={this.state.menu.id} item={drink} />
             </div>
            )
        })
        return (
            <div className="drinks">
                <h1>Your Menu</h1>
                {drinks}
            </div>
        )
    }
}
