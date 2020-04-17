import React from "react";
import "./style.scss";

function HomeBox() {
    return (
        <div className="card bg-dark text-white welcomeBox">
            <img src="./dogncat_banner.jpg" className="card-img welcomeImg" alt="cat and dog bannner" />
            <div className="card-img-overlay">
                <h3 className="card-title welcome">Welcome to Pet Playground</h3>
                <h2>For your pets.</h2>
                {<p className="card-text welcomeText">Keep track of your pets active lifestyle.</p>}
            </div>
        </div>

    );
}

export default HomeBox;
