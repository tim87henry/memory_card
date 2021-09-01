import React from 'react';
import '../style.css';

const Header = (props) => {
    return(
        <div className="header">
            <div className="heading">
                Memory Card Game
            </div>
            <ul className="scoreList">
                <li>Current Score : {props.currScore}</li>
                <li>High Score : {props.highScore}</li>
            </ul>
        </div>
        
    )
}

export default Header;