import React from 'react'
import { Context } from "../local/context";
export const TextArea = () => {
    const {setTextArea,setTextAreaValue,textArea}=React.useContext(Context)
    const[state,setState]=React.useState()

    const Value = React.useRef()
    const Change = () => {
      setTextAreaValue(Value.current.value)
      setTextArea(Value.current.value.length)
        

    }
    React.useEffect(() => {
      if(textArea==255){
        setState(255)
        alert("Haz alcanzado el limite")
        

      }
      
      },[textArea])



  return (
    <textarea className='text'  ref={Value} onChange={Change} maxLength={state}>

    </textarea>
  )
}
