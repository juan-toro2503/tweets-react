import React from 'react'

import { Context } from "../local/context";



export const BtnTweet = () => {
    const {setTweetValue,textAreaValue,saveTweets,getTweets,tweets}=React.useContext(Context)
    
    
    const uploadTweet =()=>{
      if(textAreaValue==""){
        alert("Please enter tweet")
      }else{
        setTweetValue(textAreaValue)
      }
    } 
     
  return (
    <div>
            <button className="btn btn-primary" onClick={uploadTweet}>publicar</button>
            <button className="btn btn-primary" onClick={saveTweets}>archivar </button>
            <button className="btn btn-primary" onClick={getTweets}>mostrar Archivados  </button>
        
    </div>
  )
}
