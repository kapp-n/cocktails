import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: '#f9bacc',
    background: '#FD4F7B',
}

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'white',
                    borderStyle: 'inset',
                    borderColor: '#FD4F7B'
                    
                }}
            >Home</NavLink>
             <NavLink
                to="/Add"
                exact
                style={link}
                activeStyle={{
                    background: 'white',
                    borderStyle: 'inset',
                    borderColor: '#FD4F7B'
                }}
            >Add</NavLink>
             <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'white',
                    borderStyle: 'inset',
                    borderColor: '#FD4F7B'
                }}
            >Menu</NavLink>
        </div>
    )
}

export default Navigation