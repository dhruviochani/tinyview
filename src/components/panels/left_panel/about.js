import React from "react";
import './Lstyle.css';

const About = () => {
    return (
        <>
            <div className="container">
                <div className="follow">
                    <div className="title_container">
                        <div className="title">Tinyview Comics
                        </div>
                    </div>
                    <div className="follow_info_cont">
                        <div className="content">
                            <span >3.08M</span>
                            <span >Views</span>
                        </div>
                        <div className="content">
                            <span>56.9K</span>
                            <span>Followers</span>
                        </div>
                        <div className="follow_btn_container">
                            <button className="follow_btn">
                                <span className="btn_text">Follow</span>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="links_cont">
                    <div className="website_link_cont">
                        <div className="link_icon">
                            <img className="link_img" src="https://tinyview.com/assets/images/icons8-link-50.png"></img>
                        </div>
                        <a class="website_link" href="https://tinyview.com/">tinyview.com</a>
                    </div>
                    <div className="socials_cont">
                        <div className="socials_icon">
                            <a href="https://www.instagram.com/tinyviewcomics/">
                                <img className="link_img" src="https://tinyview.com/assets/images/icons8-instagram-50.png"></img>
                            </a>
                        </div>
                        <div className="socials_icon">
                            <a href="https://twitter.com/TinyviewComics">
                                <img className="link_img" src="https://tinyview.com/assets/images/icons8-twitter-50.png"></img>
                            </a>
                        </div>
                        <div className="socials_icon">
                            <a href="https://www.facebook.com/tinyviewcomics">
                                <img className="link_img" src="https://tinyview.com/assets/images/icons8-facebook-50.png"></img>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text_container">
                    <div className="text">
                        <p>
                            <b>Support comic artists you love!</b>
                            Follow and enjoy the works of your favorite cartoonists. That's free! Then help the artists keep making great works by sending them virtual coffees, art supplies, and other awesome gifts.
                        </p>
                    </div>
                </div>

                <div className="functions_container">
                    <div className="func_navbar">
                        <a href="null">
                            <img className="func_icon" src="https://tinyview.com/assets/images/left-arrow.png"></img>
                        </a>
                        <a href="null">
                            <img className="func_icon" src="https://tinyview.com/assets/images/icons8-grey-bulleted-list-25.png"></img>
                        </a>
                        <a href="null">
                            <img className="func_icon" src="https://tinyview.com/assets/images/directory-icon.png"></img>
                        </a>
                        <a href="null">
                            <img className="func_icon" src="https://tinyview.com/assets/images/home-icon.png"></img>
                        </a>
                        <a href="null">
                            <img className="func_icon" src="https://tinyview.com/assets/images/share-story-icon.png"></img>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;
