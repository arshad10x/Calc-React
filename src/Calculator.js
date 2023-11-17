import React, { useState } from 'react'

const Calculator = () => {
  const [input,setInput]=useState("")

  
  const handleClick=(input)=>{
    //setInput((previous)=>previous+input)
    // setInput(input.concat(e.target.value))

    const lastChar = input.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(input)) {
      // Replace the last operator with the new one
      setInput((prevInput) => prevInput.slice(0, 1) + input);
    } else {
      // Add the new value to the input
      setInput((prevInput) => prevInput + input);
    }

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


  const data=['C','Del','(',')','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];



  return (
    <div className='card_main'>
   <div className='card_header'>
        <input type='text' value={input} readOnly />
    </div>
    <div className='card_body'>
        <div className='button'>
        {data.map((arr)=>
        <button
         
         onClick={()=>{
          if (arr === 'C') {
            handleClear();
          } else if (arr === '=') {
            handleCalculate();
          }
          else if(arr==='Del'){
            handleDelete()
          } 
          else {
            handleClick(arr);
          }
        }}>{arr}</button>
        )}
        
          
        </div>
        
      </div>
    </div>
  )
}

export default Calculator;
