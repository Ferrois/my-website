import React, { Component } from 'react';
import "../components-css/About.css"
import SkillCard from './SkillCard.js';

export default class About extends Component {
  render() {
    return(
      <div className='aboutPage'>
        <div className='aboutSkillWrapper'>
          <SkillCard skill="Javascript (.js)" desc="I love the flexibility that Javascript brings to the table. Been using it since December 2021" color="gold"/>
          <SkillCard skill="HTML (.html)" desc="I have been coding in HTML since December 2021" color="orange"/>
          <SkillCard skill="CSS (.css)" desc="CSS is an easy and intuitive way to style elements. I have been using it since December 2021" color="rgb(60,40,200)"/>
          <SkillCard skill="React (.jsx)" desc="React framework is very portable and easy to navigate. It is my go-to framework to create web applications today. Since January 2022" color="rgb(60,80,200)"/>
          <SkillCard skill="NodeJS (.js)" desc="NodeJS opens doors to a whole new world as it allowed backend developement" color="green"/>
          <SkillCard skill="Python (.py)" desc="Python was my very first coding language" color="yellow"/>
          <SkillCard skill="Responsive Web" desc="Python was my very first coding language" color="grey"/>
        </div>
      </div>
    ) 
  }
}
