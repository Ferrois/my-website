import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../components-css/Footer.css"

export default class Footer extends Component {
    render() {
        return(
            <div className='footerContainer'>
                <div className='footerSubContainer'>
                    <div className='footerHeading'>Information</div>
                    <p>©Copyrights Ferrois</p>
                    <p>This web-app was made by Ferrois using ReactJS</p>
                    <div className='footerSiteMap'>
                        <p>Site Map</p>
                        <Link to={"/"} className='footerLink'>.home()</Link>
                        <Link to={"/about"} className='footerLink'>.about()</Link>
                        <Link to={"/contact"} className='footerLink'>.contact()</Link>
                    </div>
                </div>
            </div>
        )
    }
}
