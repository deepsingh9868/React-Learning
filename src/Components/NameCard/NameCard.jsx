import React from 'react'
import "./NameCard.css";

const NameCard = ({ suggestedName }) => {
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={`https://www.namecheap.com/domains/registration/results/?domain=${suggestedName}`}>
                <div className="name-card">
                    <p className="card-content">{suggestedName}</p>
                </div>
            </a>
        </div>
    )
}

export default NameCard
