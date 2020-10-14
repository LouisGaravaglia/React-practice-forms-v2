import React, { useState } from 'react';
import useFields from "./hooks";
import MadlibResponse from "./MadlibResponse";
import './App.css';
import "./MadLibForm.css"

function MadlibForm() {
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const INITIAL_STATE = {
        adjective: '',
        noun1: '',
        verb: '',
        noun2: ''
    }
    const [formData, handleChange, resetForm] = useFields(INITIAL_STATE)


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
        {/* I was going to add validation, but then realized it was going to be a lot more intense and probably inefficent unless I used Formik, but I didn't really want to spend the time learing Formik right now, so hard pass. */}
        {/* {adjIsInvalid && isTouched && <p className="MadlibForm-error">Error: "adjective" Field can not be left blank.</p>} */}
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

