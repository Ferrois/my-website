import React, { Component } from 'react';
import "../components-css/HomeContent.css"
import { ContentText1, ContentText2 } from './ContentText';

export default class HomeContent extends Component {

  componentDidMount(){
    var elemArr = document.querySelectorAll(".contentHeader");
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(entry => {
        entry.target.classList.toggle("contentHeaderShow", entry.isIntersecting);
      })
    },{threshold:0})

    elemArr.forEach((elem)=>{
      observer.observe(elem)
    })
  }
  render() {
    return (
        <div className='contentWrapper'>
            <div className='contentWrapper1'>

            </div>
            <div className='contentHeader'>
                <h2>ferrois.is()</h2>
            </div>
            <div className='content1'>
              <ContentText1/>
            </div>
            <div className='contentHeader'>
                <h2>ferrois.from()</h2>
            </div>
            <div className='content1'>
                <ContentText2/>
            </div>
        </div>
    )
  }
}
