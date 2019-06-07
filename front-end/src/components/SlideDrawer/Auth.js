import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import ProfileName from './ProfileName'

class Auth extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }


    render(){
       const loginRegLink = (
           <ul className="navbar-nav">
                <li className="nav=item">
                    <Link to="/login" className="nav-link">
                    Login
                    </Link>
                </li>
                <li className="nav=item">
                    <Link to="/register" className="nav-link1">
                    Register
                    </Link>
                </li>
           </ul>
       )
       const userLink = (
            <ul className="navbar-nav">
                <div className="authLink">
                    <li className="nav=item">
                        <Link to="/profile" className="nav-link">
                            User
                        </Link>
                    </li>
                    <li className="nav=item">
                        <a href="/" onClick={this.logOut.bind(this)} className="nav-Link">
                            Logout
                        </a>
                    </li>
                </div>
                <div className="profile">
                    <div className="profileImg"> 

                   
                    </div>
                    <ProfileName />
                </div>
            </ul>
       )
       return (
           <nav>
               <div className="navigation">
                   <ul>
                       <li className="nav-link">
                           <Link className="navbar_links" to="/">
                            Home
                           </Link>
                           <Link className="navbar_links" to="/">
                            About
                           </Link>
                           <Link className="navbar_links" to="/">
                            Contact us
                           </Link>
                       </li>
                   </ul>
                <div>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div> 
               </div>
           </nav>
       )
    }

}
export default withRouter(Auth);