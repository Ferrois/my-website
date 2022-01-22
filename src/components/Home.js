
import React, { Component, useState, useEffect } from 'react';
import "../components-css/Home.css"
import Quote from './Quote';
import HomeContent from './HomeContent';


export default class Home extends Component {
    render() {
        return(
            <div className='homeContainer'>
                <div className='mainImage'>
                    <HomeImage />
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

//Parallax effect

const HomeImage = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    }
  
    useEffect(() => {
      window.addEventListener("scroll",handleScroll);
    
      return () => {
        window.removeEventListener("scroll",handleScroll);
      };
    }, []);
    
  
    return <img src='images/nightscene.jpg' className='mainImage' style={{
      "transform": `translateY(${offsetY * 0.5 - 70}px)`
    }}></img>
  };
