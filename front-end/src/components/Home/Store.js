import React, {Component} from 'react';

class Store extends Component{
    render(){
        return(
            <div className="store_description">
                <div className="store_row1">
                    <div className="store_box"> 
                        <img src="./Images/1492005139.png" />
                        <p>Seamless Mug</p>
                        <p>White</p>
                        <p>$5.00</p>
                        <p>Medium</p>
                    </div>
                    <div className="store_box">
                        <img src="./Images/4_28.png" />
                        <p>Northcore Mug</p>
                        <p>Olive Green</p>
                        <p>$5.00</p>
                        <p>Medium</p>
                    </div>
                    <div className="store_box">
                        <img src="./Images/MUG715-adventure-begins-mug (1).png" />
                        <p>adventure Mug</p>
                        <p>Tan</p>
                        <p>$5.00</p>
                        <p>Medium</p>
                    </div>
                </div>
                <div className="store_row2">
                    <button>Shop All</button>
                </div>
            </div>
        )
    }
}

export default Store;