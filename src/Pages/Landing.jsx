import { Link } from "react-router-dom";
import  { useState, useEffect } from "react";
import "../CSS/Search.css";
import Results from "../Components/Results.jsx";
import talentData from '../assets/talent.json';


function LandingPage() {
  document.title = 'TechSearch - Home';

  const [input, setInput] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    
    if (input) {
        const filteredSuggestions = talentData.talents
            .filter(talent => talent.talent.toLowerCase().includes(input.toLowerCase()))
            .map(talent => talent.talent);

        setSuggestions(filteredSuggestions);
    } else {
        setSuggestions([]);
    }
}, [input]);



  const handleChange =(e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(input);

    const filteredResults = talentData.people.filter(person =>
      person.title.toLowerCase() === input.toLowerCase()
    );
    setResults(filteredResults);
    setInput('');

    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
};

  

  return (
    <>
    <nav className="homeNav">
        <Link to= "/tech-job-search/home">
          <h1>TechSearch</h1>
        </Link>
        <ul className="navLinks" >
            <Link to="/tech-job-search/about">
              <li><a>About</a></li>
            </Link>
            <Link to="/tech-job-search/services">
              <li><a>Services</a></li>
            </Link>
            <Link to="/tech-job-search/contact">
              <li><a>Contact</a></li>
            </Link>
        </ul>
    </nav>
    <div className="searchContent">
      <div className="searchInner">
        <form onSubmit={handleSubmit} >
          <input  type="text" value={input} onChange={handleChange} placeholder="Search for a technology" />
          <button className="searchBtn" type="submit">Search</button>
        </form>

        {suggestions.length > 0 && (
                
                  <ul className="suggestions" >
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
                
            )}
        {submittedValue && <Results inputValue={submittedValue} results={results} />}
      </div>
    </div>
      
    </>
  );
}

export default LandingPage;