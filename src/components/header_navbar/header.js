import React,{useState} from "react";
import './style.css';

const Header = () => {

    const styles1 = { transform: "translate3d(100%px, 0px, 0px)", visibility: "hidden" }

    const styles2 = {
        transform: "translate3d(0px, 0px, 0px)"
    }

    const [isStyle, setisStyle] = useState(styles1);
    const [isShown, setisShown] = useState(true);

    return (
        <>
        <app-header>
            <div className="header_sticky">
                <div className="header">
                    <div className="navbar">
                        <div className="logo">
                            <img src="https://tinyview.com/assets/images/tinyview-logo.png"></img>
                        </div>

                        <div className="account">
                            <button className="acc_button" onClick={()=>setisStyle(styles2)}  >
                                <img src="https://tinyview.com/assets/images/user_icon.png"></img>
                        </button>
                        </div>
                    </div>
                </div>
            




            <div className="nav_overlay" style={isStyle}>
                            <nav className="nav_container" role="navigation">
                                <app-menu >
                                    <div className="mobile-nav-wrapper ng-star-inserted" style={{}}>
                                        {isShown && (
                                            <ul className="nav-list">
                                                <a className="nav-list-item" onClick={() => setisStyle(styles1)}>
                                                    <li className="close-btn">
                                                        <img src="https://tinyview.com/assets/images/close-btn.png" />
                                                    </li>
                                                </a>
                                                <a className="nav-list-item user-img">
                                                    <li >
                                                        <img src="https://tinyview.com/assets/images/user_icon-white.png" className="ng-star-inserted img-list" />
                                                    </li>
                                                </a>
                                                <a className="nav-list-item ">
                                                    <li >
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/home-white.png" />
                                                        Home
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" href="">
                                                    <li>
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/753-signpost@2x.png" />
                                                        Directory
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" onClick={() => setisShown(false)}>
                                                    <li>
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/legal.png" />
                                                        Legal
                                                        <img className="nav-icon arrow" src="https://tinyview.com/assets/images/menu_right_arrow.png" />
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" href="">
                                                    <li>
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/terms-and-conditions-50.png" />
                                                        Contact Us
                                                    </li>
                                                </a>
                                                <a className="nav-list-item">
                                                    <li className="ng-star-inserted">
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/icons8-login-50.png" />
                                                        Sign In
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" />
                                            </ul>)}
                                        {(!isShown) && (
                                            <ul className="nav-list">
                                                <a className="nav-list-item" onClick={() => setisShown(true)}>
                                                    <li className="close-btn">
                                                        ×
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" onClick={() => setisShown(true)}>
                                                    <li style={{ paddingTop: 160 }}>
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/back_arrow.png" />
                                                        Back
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" href="">
                                                    <li>
                                                        <img className="nav-icon" src="https://tinyview.com/assets/images/terms-and-conditions-50.png" />
                                                        Terms of Use
                                                    </li>
                                                </a>
                                                <a className="nav-list-item" href="">
                                                    <li>
                                                        <img alt="" className="nav-icon" src="https://tinyview.com/assets/images/privacy-policy-50.png" />
                                                        Privacy Policy
                                                    </li>
                                                </a>
                                            </ul>
                                        )}
                                    </div>
                                </app-menu>
                            </nav>
                        </div>



                        </div>
                        </app-header>
        </>
    )
}

export default Header