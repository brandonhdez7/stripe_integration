import React, {Component} from 'react'


class Description extends Component{
    render(){
        return(
            <div className="description_home">
                <div className="description_left">
                    <img className="cup_logo" src="./Images/logo.png" alt=""/>
                    <h1>Black Bird</h1>
                    <p>Coffee Company</p>
                </div>
                <div className="description_right">
                    <h2>Everyone’s keen to find the next best thing in the world of tasty brews. You might
                         find yourself at your local coffee shop but there’s a whole 
                         world out there of more exciting flavors and experiences.</h2>

                    <p>Black Bird is your trusted go-to high quality 
                        coffee insider for people who want to discover, 
                        and experience the absolute best that craft coffee 
                        has to offer across the world. Developed by certified 
                        coffee sensory analysts, Black Bird is amassing a meticulous 
                        database featuring local coffee companies that pride 
                        themselves in serving the absolute best coffee attainable 
                        to its customers.</p>
                </div>
            </div>
        )
    }
}

export default Description;