import React from 'react'
import { useState } from 'react'
import Display from './display'
import Keypad from './keypad'
import './style.css'

const Calculator = () => {
    const [display,setDisplay]=useState(1)
    const HandleButtonClick=(e)=>{
        console.log(e.target.value)
        const currentVal=e.target.value
        if(display===0){
            setDisplay(currentVal)
        }
        else{
            setDisplay(prev=>prev + "" + currentVal)
        }
    if(currentVal == '='){
        let result=eval(display)
        setDisplay(result)
    }
    else if(currentVal=='AC'){
        setDisplay(0)
    }
    else if(currentVal=='C'){
        const sval=display + ''
        if(sval.length>1){
            setDisplay(sval.substring(0,sval.length-1))
            }
         else{
            setDisplay(0)
            }
    }}
  return (
    <div>
      <Display data={display}/>
      <Keypad onClick={HandleButtonClick}/>
    </div>
  )
}

export default Calculator
