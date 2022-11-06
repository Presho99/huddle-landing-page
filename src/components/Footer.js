import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';


function Footer(){
    return(
        <div className="footer">
            <div className="footer-one">
                <div className="footer-one-title">
                    <img src="./images/icon-messages.svg"/>
                    <h1>Huddle</h1>
                </div>
                <div className="footer-one-text">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
                </div>
                <div className="footer-phone">
                    <FontAwesomeIcon icon={faPhoneVolume}/>
                    <p>Phone: +1-543-123-4567</p>
                </div>
                <div className="footer-mail">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <p>example@huddle.com</p>
                </div>
                <div className="footer-socials">
                <AiFillFacebook/>
                <GrInstagram/>
                <FaTwitterSquare/>
                </div>
            </div>

            <div className="footer-two">
                <h5>newsletter</h5>
                <p>To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
                <form>
                    <input type="email" required/>
                    <button className="footer-btn">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Footer