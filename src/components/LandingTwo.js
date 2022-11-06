import React from "react"

function LandingTwo() {
    return (
        <div className="two">
            <div className="grow">
                <div className="grow-text">
                    <h3>Grow Together</h3>
                    <p>Generate meaningfukl discussions with your audience and build a strong loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                </div>
                <div className="grow-img">
                    <img src="./images/illustration-grow-together.svg" />
                </div>
            </div>

            <div className="flowing">
                <div className="flowing-img">
                    <img src="./images/illustration-flowing-conversation"/>
                </div>
                <div className="flowing-text">
                    <h3>Flowing Conversations</h3>
                    <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a natural flow.</p>
                </div>
            </div>

            <div className="users">
                <div className="users-text">
                    <h3>Your Users</h3>
                    <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                </div>
                <div className="users-img">
                    <img src="./images/illustration-your-users.svg" />
                </div>
            </div>

            <div className="two-bottom">
                <h3>Ready to Build Your Community?</h3>
                <button className="two-bottom-btn">
                    Get started for Free
                </button>
            </div>
        </div>
    )
}

export default LandingTwo