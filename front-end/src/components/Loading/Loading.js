import React, {Component} from 'react';
import './Loading.css'

class Loading extends Component{
    render(){
        return(
            <div className="loadingPage">
                <img className="cup_logo" src="./Images/logo.png" alt=""/>
                <h1>Black Bird</h1>
                <p>Coffee Company</p>
                <div className='cup'>
                    <div className='cup__top'></div>
                    <div className='cup__body'>
                    </div>
                </div>
                <div className='shadow'></div>
                <i>Coming Soon</i>
                <hr/>
            </div>
        )
    }
}

export default Loading;