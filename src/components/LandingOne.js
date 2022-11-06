import React from "react"
import "../assets/styles/index.css"

function LandingOne() {
    return (
        <div className="one">
            <h2 className="one-title">
                Build The Community your fans will love
            </h2>
            <p className="one-text">
                Huddle reimagines the way we build communities. You have a voice but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <button className="one-btn">
                Get started for free
            </button>
            <div className="one-image">
                <img className="one-img" src="./images/screen-mockups.svg" />
            </div>
            <div className="one-numbers">
                <div className="one-comm">
                    <img src="./images/icon-communities.svg"/>
                    <h1>1.4k+</h1>
                    <p>Communities Formed</p>
                </div>
                <div className="one-mess">
                    <img src="./images/icon-messages.svg"/>
                    <h1>2.7m+</h1>
                    <p>Messages Sent</p>
                </div>
            </div>
        </div>
    )
}

export default LandingOne