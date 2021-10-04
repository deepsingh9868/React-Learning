import React from 'react'
import "./SearchBox.css";

const SearchBox = ({ InputChange }) => {

    return (
        <div className="search-container">
            <input placeholder="Type your word here"
                type="text"
                className="search-input"
                onChange={(event) => InputChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBox
