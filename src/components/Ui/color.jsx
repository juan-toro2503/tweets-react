import React from 'react'

export const Color = () => {
    const [color, setColor] = React.useState('')
    const div=React.useRef()

    const changeColor = (e) => {
        setColor(e.target.value)
        div.current.style.backgroundColor = color
        

        
    }
    


  return (
    <div className='color' >
        <h1>{color}</h1>
        <div ref={div} ></div>
        <input type="color" onChange={  changeColor} />
    </div>
  )
}
