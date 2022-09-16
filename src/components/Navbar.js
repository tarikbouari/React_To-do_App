import React from "react";
import {Link,NavLink} from "react-router-dom"

class Navbar extends React.Component{
    constructor (props){
        super(props)
        this.state ={}
    }

    render(){
        return(
    <nav className='navbar'>
        <div>
        <Link to="/">TodoApps </Link>
        </div>
      <ul>
        <li> <NavLink to ="/"> Home</NavLink></li>
        <li><NavLink to ="about"> About </NavLink></li>
        <li> <NavLink to ="contact">Contact </NavLink></li>
      </ul>
    </nav>
        )
    }
}

export default Navbar;