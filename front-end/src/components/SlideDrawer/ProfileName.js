import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class ProfileName extends Component{
    constructor(){
        super()
        this.state ={
                name: ''
        }
    }



componentDidMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
        name: decoded.name

    })
}

    render(){
        return(
            <div>
            <h1>
                {this.state.name}
            </h1>
            </div>
        )
    }
}

export default ProfileName;
