
import React, { Component } from 'react';
import "../components-css/Home.css"
import Quote from './Quote';
import HomeContent from './HomeContent';


export default class Home extends Component {
    render() {
        return(
            <div className='homeContainer'>
                <div className='mainImage'>
                    <img src='images/nightscene.jpg'></img>
                    <div className="mainTextContainer">
                        <div className='leftQuote'>
                            <Quote/>
                        </div>
                        <div className='rightText'></div>
                    </div>
                </div>
                <div className='contentContainer'>
                    <HomeContent />
                </div>
            </div>
        )
    }
}
