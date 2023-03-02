import React from 'react'
import { Context } from "../local/context";
export const TextArea = () => {
    const {setTextArea,setTextAreaValue,textArea}=React.useContext(Context)
    const Value = React.useRef()
    const Change = () => {
      setTextAreaValue(Value.current.value)
      setTextArea(Value.current.value.length)
        

    }
    React.useEffect(() => {
      if(textArea>255){
        alert("Text is too long")
      }
      },[textArea])



  return (
    <textarea className='text'  ref={Value} onChange={Change} maxLength={255}>

    </textarea>
  )
}
