import React, {useState} from 'react';
import Header from './Header';
import Cards from './Cards';
import '../style.css';

const Game = () => {
    const [currScore, setCurrScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selectedDrivers, setSelectedDrivers]=useState([]);

    function onSelect(driver) {
        if (selectedDrivers.indexOf(driver) === -1) {
            selectedDrivers.push(driver);
            let tempScore = currScore;
            tempScore++;
            setCurrScore(tempScore);
            let new_highScore = (tempScore > highScore)? tempScore: highScore;
            setHighScore(new_highScore);
        } else {
            setSelectedDrivers([]);
            setCurrScore(0);
        }
    }

    return(
        <div>
            <Header 
            currScore={currScore} 
            highScore={highScore}
            />
            <Cards 
            highScore={highScore} 
            onSelect={onSelect}
            />
        </div>
    )
}

export default Game;