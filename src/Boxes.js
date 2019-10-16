import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { colors } from './colors.config';
import superb from 'superb';
import {Animated} from "react-animated-css";
import AnimatedVisibility from './AnimatedVisibility';

Box.propTypes = {
  word: PropTypes.string,
};

function Box({word}) {
  const color = colors[Math.floor(Math.random()*9)];
 // const [fadeing, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  function hideMe() {
    // setFading(true)
   // setTimeout(() => setVisible(false), 650);
    setVisible(false)
  }

  const style = { borderColor: color, backgroundColor: color};
  if (!visible) {
   // style.display = "none";
  }
  return (
    <AnimatedVisibility visible={visible}>
        <div className='box' style={style}>
          <div className='center'>{word}</div>{' '}
          <button className='button bottom-corner' onClick={hideMe}>
            <i className='center far fa-eye fa-lg' />{' '}
          </button>
        </div>
    </AnimatedVisibility>
  );
}


Boxes.propTypes = {

};

function Boxes() {
  const wordsArr = [...Array(12).keys()].map( (index) => ({index, word:superb.random()}));
  const [wordsMap] = useState(wordsArr);
  console.log(wordsMap);
  return (
    <div className="boxes">
      {wordsMap.map( map => (<Box key={map.index} word={map.word} />))}
    </div>
  );
}

export default Boxes;
