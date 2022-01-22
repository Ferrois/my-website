import React, { Component } from 'react';
import "../components-css/Header.css"
import Name from "./Name.js"
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

export default class Header extends Component {
  render() {
    return(
      <div className='stickyContainer'>
        <div className='headerSpace'>

        </div>
      <div className='headerContainer'>
        <div className='headerWrapper'>
            <div className='headerLeft'>
                .owner() =
                <Name/>
            </div>
            <div className='headerRight'>
                <Link to={"/"} className='navLink'>.home()</Link>
                <Link to={"/about"} className='navLink'>.about()</Link>
                <Link to={"/contact"} className='navLink'>.contact()</Link>
                <Dropdown/>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
