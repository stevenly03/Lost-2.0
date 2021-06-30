import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
// import {Button} from "../Button"
export default class Navbar extends Component {

  render() {
    return (
      <div id="nav-bar">
        <nav className="NavbarItems">
          <ul className='nav-menu'>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        
        </nav>
        </div>
    )
  }
}

