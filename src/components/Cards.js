import React, {useState} from 'react';
import lewis from '../images/lewis.png'; 
import max from '../images/max.png';
import charles from '../images/charles.png';
import carlos from '../images/carlos.png';
import sergio from '../images/sergio.png';
import valtteri from '../images/valtteri.png';
import lando from '../images/lando.png';
import daniel from '../images/daniel.png';
import pierre from '../images/pierre.png';
import yuki from '../images/yuki.png';
import sebastian from '../images/sebastian.png';
import lance from '../images/lance.png';
import fernando from '../images/fernando.png';
import esteban from '../images/esteban.png';
import kimi from '../images/kimi.png';
import antonio from '../images/antonio.png';
import nicholas from '../images/nicholas.png';
import george from '../images/george.png';
import mick from '../images/mick.png';
import nikita from '../images/nikita.png';

const Cards = (props) => {
    const photos = {
        1: max,
        2: lewis,
        3: charles,
        4: carlos,
        5: sergio,
        6: valtteri,
        7: lando,
        8: daniel,
        9: pierre,
        10: yuki,
        11: sebastian,
        12: lance,
        13: fernando,
        14: esteban,
        15: kimi,
        16: antonio,
        17: nicholas,
        18: george,
        19: mick,
        20: nikita
    };

    const [highScore, setHighScore] = useState(props.highScore);
    let pics = [];
    let selected=[];

    // Display cards in a random order
    function displayCards() {
        for (let i=1;i<=20;i++) {
            let num=100;
            while(num === 100) {
                num = Math.floor(Math.random() * 20);
                num++;
                num = (selected.indexOf(num) === -1)? num: 100;
            }
            selected.push(num);
            pics.push(<img src={photos[num]} alt="driver" onClick={() => {props.onSelect(num)}} className="photos"></img>)
        }
    }

    return(
        <div className="cards">
            {displayCards()}
            {pics}
        </div>
    )
}

export default Cards;