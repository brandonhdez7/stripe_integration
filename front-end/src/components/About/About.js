import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './About.css'


class About extends Component{
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
                <div className="aboutMain">
                    <div className="aboutBanner">
                        <div className="about_banner_left">
                            <img src="./Images/shoot_illustration.png" />
                        </div>
                        <div className="about_banner_right">
                            <h1>Get to know Black Bird</h1>

                            <p>We aim to affect whole communities for positive change,
                            and pour redeeming goodness into every cup.</p>
                        </div>
                    </div>
                    <div className="about_description">
                        <div className="about_description_left">
                            <h1>8737y477y3</h1>
                            <h1>hehu3heh323e32r32r</h1>
                            <h1>he37h2932362632</h1>
                        </div>
                        <div className="about_description_right">
                            <img src="/Images/chat.png" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About; 
