import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar'
// import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from '../SlideDrawer/SlideDrawer';
import Backdrop from '../Backdrop/Backdrop'
import {Link} from 'react-router-dom'
import './MethodInfo.css'


class Turkish extends Component{
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
                            <img src="/Images/turkish1.png" />
                        </div>
                        <div className="method_info_right">
                                <h1>Turkish Coffee</h1>
                                <p>Mainly enjoyed throughout the Middle East, it is made in a cezve, a typical long-handled pot made from copper or brass.
                                    Very finely ground coffee is needed to make it.
                                    Traditionally a brass grinder is used, in order to obtain a powder as fine as caster sugar.
                                    It is drunk from small cups, once the powder has completely settled at the bottom.</p>

                                    <p></p>
                        </div>
                    </div>
                    <div className="methodStarting">
                        <div className="method_info_left">
                            <h1>What You'll Need</h1>
                            <ul>
                                <li>Add water to the cezve (ibrik), about 50 milliliters (1.7 oz) per cup of coffee desired</li>
                                <li>Add sugar to taste, stirring to blend it</li>
                                <li>Bring to a boil, remove from heat and add a teaspoon of coffee per cup</li>
                                <li>Boil coffee.</li>
                                <li>Remove the cevze from heat immediately after bringing to a first boil, discarding the accumulated foam, and mix well.</li>
                                <li>The coffee is boiled twice in succession, taking care to remove the cezve from the heat between one boiling and the next. The foam can either be discarded or kept before stirring it well</li>
                                <li>Allow remaining powder to settle before serving.  You can add a tablespoon of cold water to the pot after boiling twice to accelerate the process.</li>
                            </ul>
                        </div>
                        <div className="method_info_right">
                            <h1>Before You Brew</h1>
                            <p>Many enjoy their Turkish coffee flavored 
                                with spices like cardamom and cinnamon. 
                                Simply add finely ground spices to taste.</p>

                                <p></p>

                        </div>
                    </div>
                    <div className="methodButton">
                       
                            <h1>Start Brewing</h1>
                            <button>Brew Turkish Coffee</button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default Turkish; 