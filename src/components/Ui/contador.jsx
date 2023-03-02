import React from 'react'

export const Contador = () => {
    const [contador, setContador] = React.useState(0)
    /* const [valor, setValor] = React.useState('') */
    const [color,setColor] = React.useState('')
    

    React.useEffect(()=>{
      contador >9?setColor('verde'):setColor('negro')
      //le pasdamos la variables de dependecia para que esta se ejecute cada vez que nuestra variable cambia, sino la ponemos solo se ejecuta una sola vez en nuestro effect
    }, [contador])



  return (
    <div  className='contador'>
        <h1 className={color} >Contador: {contador}</h1>
        <div className='botones'>
          <button onClick={() => setContador(contador + 1)}>Incrementar</button>
          <button onClick={() => setContador(contador - 1)}>Decrementar</button>
          <button onClick={() => setContador(contador - contador)}>Reiniciar</button>
        </div>
        
        


    </div>
  )
}
