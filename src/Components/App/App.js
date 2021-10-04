import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultsContainer/ResultContainer";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [Input, setInput] = useState();
  const [IsExpanded, setIsExpanded] = useState(true);
  const [Results, setResults] = useState([])

  //This is used to take data from search component and pass it as a prop in header component
  //first pass funtion as prop to retrive userinput and then pass again as prop to header to perform transition
  //because data flow is always from parent to child
  //so what we are doing is sending somebody to take userdata from search component and then use it as prop on header 

  const handleInput = (inputText) => {
    setResults(inputText.length > 0 ? name(inputText) : []);
    setInput(inputText);
    setIsExpanded(inputText.length > 0 ? false : true);

  }

  return (
    <>
      <div>
        <Header headExpanded={IsExpanded} headTitle={Input} />
        <SearchBox InputChange={handleInput} />
        <ResultContainer SuggestedNames={Results} />
      </div>
    </>
  );
};


export default App;


