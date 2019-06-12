import React, {Component} from 'react';
import Slider from 'react-slick'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 70%;
`;

class Store extends Component{
    render(){
        return(
            <div className="store_description">
                <div className="store_row1">
                <Wrapper>
                    <Slider
                        centerMode={true}
                        centerPadding={'30px'}
                        arrows={true}
                        speed={500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        infinite={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                        dots={true}
                    >
                        <div> 
                            <div className="store_box">
                                <img src="./Images/chemex.png" />
                                <p>Coffee Maker</p>
                                <p>Chemex</p>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src="./Images/frenchpress.png" />
                                <p>Coffee Maker</p>
                                <p>FrenchPress</p>
                            </div>
                        </div>
                        <div >
                            <div className="store_box">
                                <img src="./Images/coldbrewing.png" />
                                <p>Coffee Maker</p>
                                <p>Cold Brewing</p>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src="./Images/v60.png" />
                                <p>Coffee Maker</p>
                                <p>v60</p>
                            </div>
                        </div>
                        <div>
                            <div className="store_box">
                                <img src="./Images/espresso.png" />
                                <p>Coffee Maker</p>
                                <p>Espresso</p>
                            </div>
                        </div>
                    </Slider>
                    </Wrapper>
                    </div>
                    <div className="store_row2">
                        <button>View All</button>
                    </div>
                </div>
        )
    }
}

export default Store;