import { useState, MouseEvent} from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const value = (event.target as HTMLButtonElement).value;


    if(hasResult) {
      setResult(`${value}`);
      setHasResult(!hasResult);
    } else {
      setResult(result + value);
    }
  }

  const handleButtonClickEquals = () => {
    setHasResult(!hasResult);
    setResult(eval(result));
  }

  const handleButtonClear = () => {
    setResult('');
  }

  const handleButtonPercentage = () => {
    setResult(eval(`${result}/100`));
    setHasResult(!hasResult);
  }

  return (
      <div>
        <h1>Calculator App</h1>

        <div className="calculator-container">
          <div className="buttons-container-row">
            <input type="text" value={result} readOnly className="result-pane" placeholder='0'/>
          </div>
          <div className="buttons-container-row">
            <button value="C" onClick={(handleButtonClear)}>C</button>   
            <button value="%" onClick={handleButtonPercentage}>%</button>      
          </div>
          <div className="buttons-container-row">
            <button value="7" onClick={((e) => handleButtonClick(e))}>7</button>
            <button value="8" onClick={((e) => handleButtonClick(e))}>8</button>
            <button value="9" onClick={((e) => handleButtonClick(e))}>9</button>
            <button value="/" className="operation-button" onClick={((e) => handleButtonClick(e))}>/</button>       
          </div>
          <div className="buttons-container-row">
            <button value="4" onClick={((e) => handleButtonClick(e))}>4</button>
            <button value="5" onClick={((e) => handleButtonClick(e))}>5</button>
            <button value="6" onClick={((e) => handleButtonClick(e))}>6</button>
            <button value="*" className="operation-button" onClick={((e) => handleButtonClick(e))}>*</button>       
          </div>
          <div className="buttons-container-row">
            <button value="1" onClick={((e) => handleButtonClick(e))}>1</button>
            <button value="2" onClick={((e) => handleButtonClick(e))}>2</button>
            <button value="3" onClick={((e) => handleButtonClick(e))}>3</button>
            <button value="-" className="operation-button" onClick={((e) => handleButtonClick(e))}>-</button>       
          </div>
          <div className="buttons-container-row">
            <button value="0" className="zero-button" onClick={((e) => handleButtonClick(e))}>0</button>
            <button value="." onClick={((e) => handleButtonClick(e))}>.</button>
            <button value="+" className="operation-button" onClick={((e) => handleButtonClick(e))}>+</button>       
          </div>
          <div className="buttons-container-row">
            <button value="=" className="equals-button operation-button" onClick={((e) => handleButtonClickEquals(e))}>=</button>       
          </div>
        </div>  
      </div>
  )
}

export default App
