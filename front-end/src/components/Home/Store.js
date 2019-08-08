import React, {Component} from 'react';
import Slider from 'react-slick'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    width: 70%;
`;

class Store extends Component{
    
    
    render(){

        var settings = {
            centerMode: true,
            centerPadding: '40px',
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            responsive: [
              {
                breakpoint: 1280,
                settings: { 
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                 }
              },
              {
                breakpoint: 768,
                settings: { 
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                 }
              },
              {
                breakpoint: 480,
                settings: { 
                    centerMode: true,
                    centerPadding: '20px',
                    arrows: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                 }
              },
            ]
          }; 


        return(
            <div className="store_description">
                <div className="store_row1">
                <h2>Lets Take A Coffee Break</h2>
                <p>There is a wide acceptance that manual brewing 
                    methods allow for better quality control and a 
                    superior coffee experience. For many, it’s more 
                    fun and fascinating to have a hands-on approach 
                    with their brewing process rather than hitting a 
                    ‘brew’ button on a machine.</p>
                <Wrapper>
                    <Slider {...settings}>
                        <div > 
                            <div className="store_box">
                                <img src="./Images/chemex2.png" />
                                <p>Coffee Maker</p>
                                <p>Chemex</p>
                               <Link className="method_link" to="/Chemex">Brew Chemex</Link>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src="./Images/frenchpress2.png" />
                                <p>Coffee Maker</p>
                                <p>FrenchPress</p>
                                <Link className="method_link" to="/FrenchPress">Brew FrenchPress</Link>
                            </div>
                        </div>
                        <div >
                            <div className="store_box">
                                <img src="./Images/turkish.png" />
                                <p>Coffee Maker</p>
                                <p>Moka Pot</p>
                                <Link className="method_link" to="/MokaPot">Brew Moka Pot</Link>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src="./Images/v602.png" />
                                <p>Coffee Maker</p>
                                <p>v60</p>
                                <Link className="method_link" to="/V60">Brew v60</Link>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src="./Images/espresso2.png" />
                                <p>Coffee Maker</p>
                                <p>Espresso</p>
                                <Link className="method_link" to="/Espresso">Brew Espresso</Link>
                            </div>
                        </div>
                    </Slider>
                    </Wrapper>
                    </div>
                    <div className="store_row2">
                        <Link className="method_link" to="/Methods">View All</Link>
                    </div>
                </div>
        )
    }
}

export default Store;