import React from 'react'
import { BtnTweet } from './btnTweet'
import { TextArea } from './textArea'

import { Context } from "../local/context";
import { Archived } from './archived';

export const TweetContainer = () => {
  const {tweetValue,textArea}=React.useContext(Context)

 
  
  
  return (
    <div className='container-tweets'>
      <div>
      <h2>Publica tu tweet</h2>
        <TextArea></TextArea>
        <BtnTweet></BtnTweet>
        <h5  className={`verde ${textArea>204 && "rojo"}`}>te quedan { 255-textArea} caracteres</h5>
        <div className='container-tweet'><h3> Tu tweet: </h3><h4>{tweetValue}</h4></div>
        
      </div>
      <Archived></Archived>
        
        

    </div>
  )
}
