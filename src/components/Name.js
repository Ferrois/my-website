import React from 'react';
import { useState, useEffect } from 'react/cjs/react.production.min';

class Name extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            effectIndex : -1,
            color: "#674ea7"
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                effectIndex : this.state.effectIndex + 1
            })
            if (this.state.effectIndex > 5){
                this.state.effectIndex = -15
            }
        },100)
    }

    render(){
        return (<span style={{'userSelect': 'none'}}>
            <span> </span>
            <span>'</span>
            <span style={{'color' : this.state.effectIndex === 0 ? this.state.color : "white"}}>f</span>
            <span style={{'color' : this.state.effectIndex === 1 ? this.state.color : "white"}}>e</span>
            <span style={{'color' : this.state.effectIndex === 2 ? this.state.color : "white"}}>r</span>
            <span style={{'color' : this.state.effectIndex === 3 ? this.state.color : "white"}}>r</span>
            <span style={{'color' : this.state.effectIndex === 4 ? this.state.color : "white"}}>o</span>
            <span style={{'color' : this.state.effectIndex === 5 ? this.state.color : "white"}}>i</span>
            <span style={{'color' : this.state.effectIndex === 6 ? this.state.color : "white"}}>s</span>
            <span>'</span>
            <span>;</span>
        </span>
        )
        
    }
};

export default Name;
