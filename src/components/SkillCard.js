import React, { Component } from 'react';
import "../components-css/About.css";

export default class SkillCard extends Component {
    constructor(props){
        super(props);
        this.skill = props.skill;
        // this.desc = props.desc;
        this.color = props.color;
    }
    render() {
        return(
            <div>
                <div className='skillCard'>
                    <h2 style={{"color":this.color}}>{this.skill}</h2>
                    {/* <p>{this.desc}</p> */}
                </div>
            </div>
        )
    }
}
