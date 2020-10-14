import React from 'react';
import './App.css';
import "./MadLibForm.css"

function MadlibResponse({adjective, noun1, verb, noun2, restartGame}) {
 
 return (
      <>
      <h2 className="MadlibForm-header">Madlibs!</h2>
        <h4>A famous chinese proverb says that to find happiness one must be a <span className="MadlibResponse-word">{adjective}</span> <span className="MadlibResponse-word">{noun1}</span> who <span className="MadlibResponse-word">{verb}</span> forty-five <span className="MadlibResponse-word">{noun2}</span> a day</h4>
         <button onClick={restartGame}>Reset</button>
      </>
  )
}

export default MadlibResponse;


//a fastpresident whopoopedforty-five skittlesa daye a LARGE BUTTERFLY who EATS forty-five THINGS a day
