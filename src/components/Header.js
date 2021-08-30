import React from 'react';
import '../style.css';

const Header = (props) => {
    return(
        <div className="header">
            Click on any image to get a point. Just make sure you don't click the same image twice.
            <p>Current Score : {props.currScore}</p>
            <p>High Score : {props.highScore}</p>
        </div>
        
    )
}

export default Header;