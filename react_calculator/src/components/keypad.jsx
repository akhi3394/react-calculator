import React from 'react'
import Button from './button'

const Keypad = (prop) => {
    console.log('keypad' + prop);
  return (
    <>
   <div className="row">
   <Button value='7' className='btn' onClick={prop.onClick}/> 
   <Button value='8' className='btn' onClick={prop.onClick}/> 
   <Button value='9' className='btn' onClick={prop.onClick}/> 
   <Button value='*' className='btn' onClick={prop.onClick}/> 
   </div>
   <div className="row">
   <Button value='4' className='btn'  onClick={prop.onClick}/> 
   <Button value='5' className='btn' onClick={prop.onClick}/> 
   <Button value='6' className='btn' onClick={prop.onClick}/> 
   <Button value='-' className='btn' onClick={prop.onClick}/> 
   </div>
   <div className="row">
   <Button value='1' className='btn' onClick={prop.onClick}/> 
   <Button value='2' className='btn' onClick={prop.onClick}/> 
   <Button value='3' className='btn' onClick={prop.onClick}/> 
   <Button value='+' className='btn' onClick={prop.onClick}/> 
   </div>
   <div className="0">
   <Button value='.' className='btn' onClick={prop.onClick}/> 
   <Button value='C' className='btn'onClick={prop.onClick}/> 
   <Button value='AC' className='btn' onClick={prop.onClick}/> 
   <Button value='=' className='btn' onClick={prop.onClick}/> 
   </div>
    </>
  )
}

export default Keypad
