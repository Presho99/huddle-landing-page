import React from "react"


function Header(){
    return(
        <div className="header">
            <div className="header-logo">
                <img className="image" src="./images/icon-messages.svg"/>
                <h1>Huddle</h1>
            </div>
            <div className="header-btn">
                <button>Try It Free</button>
            </div>
        </div>
    )
}

export default Header