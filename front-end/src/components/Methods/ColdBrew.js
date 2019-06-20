import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.css'


class ColdBrew extends Component{
    state = {
        slideDrawerOpen: false
    }


    drawerToggleClickHandler = () => {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
    }

    render(){
        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        return(
            <div className="homePage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <div className="methodMain">
                    <div className="methodInfo">
                        <div className="method_info_left">
                            <img src="/Images/portafilter.png" />
                        </div>
                        <div className="method_info_right">
                                <h1>Cold Brew</h1>
                                <p>For coffee purists, espresso is the quintessential 
                                    coffee preparation – rich, aromatic and velvety all 
                                    at once; a natural layer of crema on top belying a 
                                    full-bodied, yet deftly balanced liquid below. When 
                                    ideally realized, a small miracle of chemistry and 
                                    physics: science and art gliding together on air.</p>

                                    <p>Espresso’s authentic formula is clear and basic, 
                                        its proper execution a matter of training, experience
                                         and natural talent.  A jet of hot water at 88°-93°C
                                          (190°-200°F) passes under a pressure of nine or more 
                                          atmospheres through a seven-gram (.25 oz) cake-like 
                                          layer of ground and tamped coffee. Done right, the 
                                          result is a concentrate of not more than 30 ml (one oz) 
                                          of pure sensorial pleasure.</p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <ul>
                                <li>Hario V60 dripper</li>
                                <li>V60 paper filter</li>
                                <li>21 grams (3-4 tbsp) Craft Coffee beans</li>
                                <li>300 mL water, plus additional for rinsing</li>
                                <li>Pouring Kettle (gooseneck preferred)</li>
                                <li>Burr grinder (recommended)</li>
                                <li>Scale (recommended)</li>
                            </ul>
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>Authentic espresso preparation ideally starts 
                                by freshly grinding beans perfected for this 
                                purest of methods.  The art of the barista is 
                                to calibrate the grind, expertly tamp just the 
                                right amount of coffee into the filter, then keep 
                                close watch on time, temperature and pressure. 
                                Even today’s advanced, automatic machines require 
                                proper vigilance; perfection hangs in the balance.</p>

                                <p></p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button>Brew Cold Brew</button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default ColdBrew; 