import { useState } from 'react'
import './App.css'

function App() {
  const [result,setResult]=useState("");

  const clickHandler = (event) =>{
    setResult(result.concat(event.target.value))
  }

  const clrDisplay = () =>{
    setResult("")
  }

  const calculate = () =>{
    setResult(eval(result))
  }

  return (
    <>
    <div className="container">
        <div className="calculator">
            <div className="title"><h2>Calculator</h2></div>
            <hr className="under-title"/>
            <form>
                <div className="display">
                    <input type="text" name="display" placeholder='0' disabled value = {result}/>
                </div>
            <hr/>
            <br/>
                <div className="r-1">
                    <input type="button" value="7" onClick={clickHandler}/>
                    <input type="button" value="8" onClick={clickHandler}/>
                    <input type="button" value="9" onClick={clickHandler}/>
                    <input type="button" value="/" onClick={clickHandler} className="divide"/>
                </div>
                <div className="r-2">
                    <input type="button" value="4" onClick={clickHandler}/>
                    <input type="button" value="5" onClick={clickHandler}/>
                    <input type="button" value="6" onClick={clickHandler}/>
                    <input type="button" value="*" onClick={clickHandler} className="multiply"/>
                </div>
                <div className="r-3">
                    <input type="button" value="1" onClick={clickHandler}/>
                    <input type="button" value="2" onClick={clickHandler}/>
                    <input type="button" value="3" onClick={clickHandler}/>
                    <input type="button" value="+" onClick={clickHandler} className="plus"/>
                </div>
                <div className="r-4">
                    <input type="button" value="." onClick={clickHandler} className="point"/>
                    <input type="button" value="0" onClick={clickHandler}/>
                    <input type="button" value="=" onClick={calculate} className="equal"/>
                    <input type="button" value="-" onClick={clickHandler} className="minus"/>
                </div>
                <div className="clear">
                    <input type="button" value="Clear" onClick={clrDisplay}/>
                </div>
            </form>
        </div>
      </div>      
    </>
  )
}

export default App
