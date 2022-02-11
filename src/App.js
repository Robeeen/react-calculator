import React, { useState } from "react";
import './App.css';

const App = () => {
  const[result, setResult] = useState("");

  const handleClick = (e) =>{
      setResult(result.concat(e.target.value))//to display input inline
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {

  }
  return(
    <>
    <div className="container">
      <form action="">
        <input type="text" value={result}/>
      </form>
     <div className="keypad">
       <button onClick={clear} id="clear">Clear</button>
       <button onClick={backspace} id="backspace">C</button>
       <button value="/" onClick={handleClick}>&divide;</button>
       <button value="7" onClick={handleClick}>7</button>
       <button value="8" onClick={handleClick}>8</button>
       <button value="9" onClick={handleClick}>9</button>
       <button value="*" onClick={handleClick}>&times;</button>
       <button value="4" onClick={handleClick}>4</button>
       <button value="5" onClick={handleClick}>5</button>
       <button value="6" onClick={handleClick}>6</button>
       <button value="-" onClick={handleClick}>&mdash;</button>
       <button value="1" onClick={handleClick}>1</button>
       <button value="2" onClick={handleClick}>2</button>
       <button value="3" onClick={handleClick}>3</button>
       <button value="+" onClick={handleClick}>+</button>
       <button value="0" onClick={handleClick}>0</button>
       <button value="." onClick={handleClick}>.</button>
       <button onClick={handleClick}>=</button>
     </div>
    </div>
    </>
  )
}
export default App;