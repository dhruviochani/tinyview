import React from "react";
import './style.css';
const Header =()=>
{
    return(
        <>
        <div className="header_sticky">
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <img src="https://tinyview.com/assets/images/tinyview-logo.png"></img>
                    </div>
                    
                    <div className="account">
                        <button className="acc_button">
                        <img src="https://tinyview.com/assets/images/user_icon.png"></img>

                        </button>
                        
                    </div>
                    
            </div>
            
        </div>
        </div>
        </>
    )
}

export default Header