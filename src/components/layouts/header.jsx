import React from "react";
import {Nav} from "../Ui/nav"
import '../../App.css'

export const Header = (props) => {
  return (
    <header>
      <Nav pages={props.pages}/>
    </header>
  )
}
  


