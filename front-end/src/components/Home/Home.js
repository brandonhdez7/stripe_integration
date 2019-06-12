import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Store from '../Home/Store'
import './Home.css'
import Description from './Description';

const AppWrapper = styled.div`
    width: 100%;
`

class Home extends Component{
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
                <div className="homeMain">
                    <div className="banner">
                        <div className="banner_left">
                            <h3>We craft beautiful coffee, create purposeful work, 
                                and cultivate flourishing communities.</h3>

                            <h5>We believe coffee is more than just careful farming, 
                                intentional processing and expert roasting. Coffee 
                                is an opportunity to do good, and doing good means 
                                we get to help people and champion dignity.</h5>

                            <p>We aim to affect whole communities for positive change,
                            and pour redeeming goodness into every cup.</p>
                        </div>
                        <div className="banner_right">
                            <img src="./Images/barista.png" />
                        </div>
                    </div>

                    <Store/>
                    
                    <form>
                        <img src="/Images/coffeehouse.png" />
                        <label className="homeSearch">
                            <h2>Find your next favorite coffee shop nearest to you or any location in the world</h2>
                            <input placeholder="Destination" type="text" required />
                            <img className="label-text1" src="./Images/55369.png" alt="" />
                        </label>
                    </form>
                    <Description />
                </div>

            </div>
        )
    }
}
export default Home;