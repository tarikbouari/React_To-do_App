import React from "react";

class Footer extends React.Component{
    constructor (props){
        super(props)
        this.state ={}
    }

    render(){

        return (
            <div className="footer">
                <a> TodoApps</a>
                <p> Allright reserved</p>
            </div>
        )
    }
}

export default Footer;