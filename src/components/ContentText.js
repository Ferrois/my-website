import React from 'react';
import Aos from 'aos';
import "../components-css/HomeContent.css";
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";

export class ContentText1 extends React.Component{
    constructor(props) {
        super(props);
        Aos.init();
    }

    // componentDidMount(){
    //     Aos.init({duration: 2000});
    // }

    render(){
        return(
            <div>
                <div data-aos="zoom-in-right" data-aos-duration="0000" className='contentText'>
                    Aspiring <Typewriter onInit={(typewriter)=>{
                        typewriter.typeString("Front End Dev")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Back End Dev")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Full Stack Dev")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Opthalmologist")
                        .pauseFor(1000)
                        .deleteAll()
                        .start(typewriter);
                    }} options={{
                        loop:true
                    }}></Typewriter>
                </div>
                <div data-aos="fade-up" className='contentText' style={{"display":"block"}}>
                    I want to work on programs that will change the world.
                </div>
            </div>
        )
    }
};


export class ContentText2 extends React.Component {
    render() {
        return (
            <div>
                <div data-aos="fade-right" className='contentText'>Based in <span style={{"color" : "red","fontWeight":"bold"}}>Singapore</span>,<br/>Proud to be a <span style={{"color" : "red","fontWeight":"bold"}}>Singaporean</span>.</div>
            </div>
        )
    }
}
