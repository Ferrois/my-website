import React, { Component } from 'react';
import "../components-css/Header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Dropdown = () => {
    const [isDropbarActivated,setIsDropbarActivated] = useState(false);

    const toggleDropbar = () => {
        setIsDropbarActivated(!isDropbarActivated)
    }

  return <div>
        <button onClick={toggleDropbar} className={isDropbarActivated ? "dropdownBar" : "dropdownBarActivated"}>.routes()</button>
        <div className='dropdownTray' style={{
            "transform" : isDropbarActivated ? "" : "translateY(-370px)",
            "backgroundColor" : isDropbarActivated ? "rgba(53, 53, 53,1)" : "rgba(0,0,0,0)"}}>
            <Link to={"/"} className='navLinkDrop' onClick={toggleDropbar}>.home()</Link>
            <Link to={"/about"} className='navLinkDrop' onClick={toggleDropbar}>.about()</Link>
            <Link to={"/contact"} className='navLinkDrop' onClick={toggleDropbar}>.contact()</Link>
        </div>
    </div>;
};

export default Dropdown;


// export default class Dropdown extends Component {
//     constructor(){
//         super();
//         this.state = {
//             isDropbarActivated : false
//         }
//     }



//   render() {
//     return <div>
//         <button className='dropdownBar' onClick={this.toggleDropbar} style={{"color" : this.state.isDropbarActivated ? "red" : "blue"}}>.routes()</button>
//     </div>;
//   }
// }
