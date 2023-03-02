import React from 'react'
import { Context } from "../local/context";
export const Archived = () => {
  const {tweets,deleteTweet}=React.useContext(Context)



  
  return (
    <ul className='ul'>
      {tweets.map((tweet,index) => <li key={index}  >-{tweet}<p onMouseDown={deleteTweet}>x</p></li> )}

    </ul>
    
  )
}
