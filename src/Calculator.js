import React, { useState } from 'react'

const Calculator = () => {
  const [input,setInput]=useState("")

  
  const handleClick=(e)=>{
    setInput(input.concat(e.target.value))
  }
  const handleCalculate=()=>{
    console.log(input);
    // const result=new Function(`return ${input}`)();
    // setInput(result.toString());

    setInput(eval(input).toString())
  }
  const handleClear = () => {
    setInput('');
  };

  const handleDelete=(input)=>{
    // setInput(input.length-1)
    setInput((prevInput) => prevInput.slice(0, -1));

  }
  return (
    <div className='card_main'>
   <div className='card_header'>
        <input type='text' placeholder='0' value={input} readOnly />
    </div>
    <div className='card_body'>
        <div className='button'>
          <button value="clear" onClick={handleClear}>C</button>
          <button value="%" onClick={handleDelete}>Del</button>
          <button value="(" onClick={handleClick}>(</button>
          <button value=")" onClick={handleClick}>)</button>
        </div>

        <div className='button fix'>
          <button value="7" onClick={handleClick}>7</button>
          <button value="8" onClick={handleClick}>8</button>
          <button value="9" onClick={handleClick}>9</button>
          <button value="/" onClick={handleClick}>/</button>
        </div>

        <div className='button'>
          <button value="4" onClick={handleClick}>4</button>
          <button value="5" onClick={handleClick}>5</button>
          <button value="6" onClick={handleClick}>6</button>
          <button value="*" onClick={handleClick}>*</button>
        </div>

        <div className='button'>
          <button value="1" onClick={handleClick}>1</button>
          <button value="2" onClick={handleClick}>2</button>
          <button value="3" onClick={handleClick}>3</button>
          <button value="-" onClick={handleClick}>-</button>
        </div>

        <div className='button'>
          <button value="0" onClick={handleClick}>0</button>
          <button value="." onClick={handleClick}>.</button>
          <button value="=" onClick={handleCalculate}>=</button>
          <button value="+" onClick={handleClick}>+</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator;
