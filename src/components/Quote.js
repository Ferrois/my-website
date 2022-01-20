import React from 'react';
import "../components-css/Home.css"
//uses Home.css!!!!!!!!!

class Quote extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         isLoaded : false
    //     }
    // }

    // componentDidMount(){
    //     this.setState({
    //         isLoaded : true
    //     })
    // }

    render(){
        return(
        <p className='leftQuoteText'>
            {"if (isCoder ==  false){"}<br/>&emsp;{"user.learnToCode();"}<br/>{"}else{"}<br/>&emsp;{"user.doCode();"}<br/>{"}"}
        </p>
        )
    }
}

export default Quote;
