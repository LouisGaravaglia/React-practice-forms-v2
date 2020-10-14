import React, { useState } from 'react';
import useFields from "./hooks";
import MadlibResponse from "./MadlibResponse";
import './App.css';
import "./MadLibForm.css"

function MadlibForm() {
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [formData, handleChange, resetForm] = useFields({
        adjective: '',
        noun1: '',
        verb: '',
        noun2: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataSubmitted(data => !data);
    }

    const restartGame = () => {
        setDataSubmitted(data => !data);
        resetForm();
    }

  const displayForm =  (

    <form onSubmit={handleSubmit} className="MadlibForm">
    <h2 className="MadlibForm-header">Madlibs!</h2>
        <input 
            type="text"
            name="adjective"
            placeholder="adjective"
            value={formData.adjective}
            onChange={handleChange}
        />
            <input 
            type="text"
            name="noun1"
            placeholder="noun (person/thing)"
            value={formData.noun1}
            onChange={handleChange}
        />
            <input 
            type="text"
            name="verb"
            placeholder="verb"
            value={formData.verb}
            onChange={handleChange}
        />
            <input 
            type="text"
            name="noun2"
            placeholder="noun (thing/plural)"
            value={formData.noun2}
            onChange={handleChange}
        />
        <button>Get my story!</button>
    </form>
  );

  const displayResults = (
      <MadlibResponse adjective={formData.adjective} noun1={formData.noun1} verb={formData.verb} noun2={formData.noun2} restartGame={restartGame}/>
  )

    //Regarding variable naming, I originally called displayForm formHTML,
    //but I changed it to displayForm because it read better in the context
    //of this conditional. Is that a good way to go about naming/renaming variables?
  if (dataSubmitted) {
      return displayResults
  } else {
      return displayForm
  }
}

export default MadlibForm;


//A famous chinese proverb says that to find happiness one
// must be a LARGE BUTTERFLY who EATS forty-five THINGS a day
