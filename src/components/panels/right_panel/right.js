import React from "react";
import './Rstyle.css';

const RightPanel = () => {
    return (
        <>
            <div className="rpanel_container">
                <div className="top_container">
                    <div className="title1">
                        Latest Comics
                    </div>
                    <div className="description">From all artists</div>
                    <div className="switch_panel">
                        <div className="switch_text">Turn off to only see artists you follow</div>
                        <div className="switch">
                            <div >slider</div>
                            {/* <input type="checkbox" className="switch">
                        <span className="slider"> </span>
                    </input> */}
                        </div>
                        <div className="space">
                        </div>
                    </div>
                </div>
                <div className="comic_container">
                    <div className="comic_panel">
                        <div className="post_container">
                            <div className="post_top_cont">
                                <div className="profile_pic">
                                    <img className="profile_img" src="https://storage.googleapis.com/tinyview-d78fb.appspot.com/frankie-fearless/frankie-fearless-profile.jpg"></img>
                                </div>
                                <div className="user_info">
                                    <a>
                                        <div className="username">USERNAME</div>
                                    </a>
                                    <p className="date_time">Thu, Jun 30,2022 . 10:01 AM</p>
                                </div>
                                <div className="comic_desc">
                                Frankie and Ollie meet up to assess the latest paranormal freakiness
                                </div>
                            </div>
                            <div className="post_middle_cont">
                                {/* <a></a> */}
                                <img className="cover_img" src="https://storage.googleapis.com/tinyview-d78fb.appspot.com/frankie-fearless/2022/06/30/episode-144-comparing-notes/comparing-notes-header.jpg"></img>
                                <div className="about_comic">
                                    <div>
                                        <a className="url_page" href="/">tinyview.com</a>
                                    </div>
                                    <div className="comic_title">
                                        Comic Title
                                    </div>
                                </div>
                            </div>
                            <div className="post_bottom_cont">
                                <div className="like_views">
                                    <div className="heart">
                                        <img className="heart_icon" src="https://tinyview.com/assets/images/red-heart.png"></img>

                                        <span className="like_count">
                                            <a>6</a>
                                        </span>
                                    </div>
                                    <div className="comic_views">
                                        <div className="views_count">
                                            <span>41   </span>
                                            <span>views</span>
                                        </div>
                                    </div>
                                    <div className="comments_container">

                                        <div className="comments">
                                            <div className="comments_count">
                                                <span>0  </span>
                                                <span>comments</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="actions_cont">
                                    <div>
                                        <img className="action_img" src="https://tinyview.com/assets/images/unfill-heart.png">
                                        </img>
                                        <span className="like_count">Like</span>
                                    </div>
                                    <div>
                                        <img className="action_img" src="https://tinyview.com/assets/images/comment-icon.png">
                                        </img>
                                        <span className="like_count">Comment</span>
                                    </div>
                                    <div>
                                        <img className="action_img" src="https://tinyview.com/assets/images/share-story-icon.png">
                                        </img>
                                        <span className="like_count">Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             

             
                <div className="comic_container">
                    <div className="comic_panel">
                        <div className="post_container">
                            <div className="post_top_cont">
                                <div className="profile_pic">
                                    <img className="profile_img" src="https://storage.googleapis.com/tinyview-d78fb.appspot.com/frankie-fearless/frankie-fearless-profile.jpg"></img>
                                </div>
                                <div className="user_info">
                                    <a>
                                        <div className="username">USERNAME</div>
                                    </a>
                                    <p className="date_time">Thu, Jun 30,2022 . 10:01 AM</p>
                                </div>
                                <div className="comic_desc">
                                    dummy text
                                </div>
                            </div>
                            <div className="post_middle_cont">
                                {/* <a></a> */}
                                <img className="cover_img" src="https://storage.googleapis.com/tinyview-d78fb.appspot.com/frankie-fearless/2022/06/30/episode-144-comparing-notes/comparing-notes-header.jpg"></img>
                                <div className="about_comic">
                                    <div>
                                        <a className="url_page" href="/">tinyview.com</a>
                                    </div>
                                    <div className="comic_title">
                                        Comic Title
                                    </div>
                                </div>
                            </div>
                            <div className="post_bottom_cont">
                                <div className="like_views">
                                    <div className="heart">
                                        <img className="heart_icon" src="https://tinyview.com/assets/images/red-heart.png"></img>

                                        <span className="like_count">
                                            <a>6</a>
                                        </span>
                                    </div>
                                    <div className="comic_views">
                                        <div className="views_count">
                                            <span>41   </span>
                                            <span>views</span>
                                        </div>
                                    </div>
                                    <div className="comments_container">

                                        <div className="comments">
                                            <div className="comments_count">
                                                <span>0  </span>
                                                <span>comments</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="actions_cont">
                                    <div>
                                        <img className="action_img" src="https://tinyview.com/assets/images/unfill-heart.png">
                                        </img>
                                        <span className="like_count">Like</span>
                                    </div>
                                    <div>
                                        <img className="action_img" src="https://tinyview.com/assets/images/comment-icon.png">
                                        </img>
                                        <span className="like_count">Comment</span>
                                    </div>
                                    <div>
                                        <img className="action_img" src="https://tinyview.com/assets/images/share-story-icon.png">
                                        </img>
                                        <span className="like_count">Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightPanel;