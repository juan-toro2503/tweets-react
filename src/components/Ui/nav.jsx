import React from "react";
import {Link} from 'react-router-dom'


export const Nav = ({pages}) => {
  return (
    <nav>
        <div className="logo">
            <img src="https://i.pinimg.com/736x/17/2f/53/172f53baa311c30570a1cdbad5d4c06f.jpg" alt="" />
        </div>
        <ul>
            {pages.map(page=>{
                return <li key={page}><Link to={`/${page}`}>{page}</Link></li>
            })}
            
        </ul>
    </nav>
  )
}
