import React from 'react'
import NameCard from '../NameCard/NameCard';
import "./ResultContainer.css";

const ResultContainer = ({ SuggestedNames }) => {
    const suggestname = SuggestedNames.map((name, index) => {
        return <NameCard key={index} suggestedName={name} />
    })
    return (
        <>
            <div className="result-container">{suggestname}
            </div>
        </>
    )
}

export default ResultContainer
