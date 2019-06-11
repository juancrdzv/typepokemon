import React, { Component } from 'react';
import { BackGroundImage } from './styled';

function ChoosePokemonScreenDisplay(props) {
  const { pokeButtons } = props;
  return (
    <BackGroundImage onClick={props.handlerClick}>
      {pokeButtons.map(item => {
        return item;
      })}
    </BackGroundImage>
  );
}

export default ChoosePokemonScreenDisplay;
