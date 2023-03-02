import React from 'react'


export const Input = () => {
    const [value, setValue] = React.useState('')
    const [name,setName] = React.useState('')



  return (
    <div className='input'>
     
        <h2>Hola, {value}</h2>
        <input type='text'  onChange={(e) => setName(e.target.value)}/>
        
        <button onClick={() => setValue(name)}>Imprimir</button> 
    </div>
  )
}
