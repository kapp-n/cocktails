import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: '#fbd1dd'
}

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: '#FD4F7B'
                }}
            >Home</NavLink>
             <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: '#FD4F7B'
                }}
            >Add</NavLink>
             <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: '#FD4F7B'
                }}
            >Menu</NavLink>
        </div>
    )
}

export default Navigation