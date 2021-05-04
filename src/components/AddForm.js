import React from 'react'

const AddForm = (props) => {
    return (
        <div className="Add">
            <form onSubmit={props.handleSubmit}>
                <label>Search by drink name </label>
                <input name="SearchBar" type="text" />
                <input type="submit" />
            </form>
    </div>
    )
}

export default AddForm
