import React, { useState } from 'react'

const Calculator = () => {
  const [input,setInput]=useState("")


  const handleClear = () => {
    setInput('');
  };

  const handleClick=(value)=>{
    setInput((prevValue) => prevValue + value);
  }
const handleDelete=(input)=>{
  setInput((prevValue)=>input-prevValue);

}
  return (
    <div className='card_main'>
   <div className='card_header'>
        <input type='text' value={input}/>
    </div>
    <div className='card_body'>
        <div className='button'>
          <button onClick={handleClear}>C</button>
          <button onClick={()=>handleDelete('')}>D</button>
          <button onClick={()=>handleClick('(')}>(</button>
          <button onClick={()=>handleClick(')')}>)</button>
        </div>

        <div className='button fix'>
          <button onClick={()=>handleClick('7')}>7</button>
          <button onClick={()=>handleClick('8')}>8</button>
          <button onClick={()=>handleClick('9')}>9</button>
          <button onClick={()=>handleClick('/')}>/</button>
        </div>

        <div className='button'>
          <button onClick={()=>handleClick('4')}>4</button>
          <button onClick={()=>handleClick('5')}>5</button>
          <button onClick={()=>handleClick('6')}>6</button>
          <button onClick={()=>handleClick('*')}>*</button>
        </div>

        <div className='button'>
          <button onClick={()=>handleClick('1')}>1</button>
          <button onClick={()=>handleClick('2')}>2</button>
          <button onClick={()=>handleClick('3')}>3</button>
          <button onClick={()=>handleClick('-')}>-</button>
        </div>

        <div className='button'>
          <button onClick={()=>handleClick('0')}>0</button>
          <button onClick={()=>handleClick('.')}>.</button>
          <button>=</button>
          <button onClick={()=>handleClick('+')}>+</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator;
