import React from 'react';
import plus from './plus.png';
import minus from './minus.png';
function Button(props) {
  return (
    <button><img src = {props.src ? plus : minus}/></button>
  );
}

export default Button;
