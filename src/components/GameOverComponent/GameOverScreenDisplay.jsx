import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/player.gif';
import { LooseSpan, LosseButton } from './styled';

function GameOverScreenDisplay(props) {
  return (
    <Grid
      container
      style={{
        height: '100%',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      alignItems="center"
    >
      <Grid item xs={12}>
        <LooseSpan>Perdiste!!!</LooseSpan>
      </Grid>
      <Grid item xs={12}>
        <LosseButton onClick={props.handleClick}>Jugar de nuevo!!!</LosseButton>
      </Grid>
    </Grid>
  );
}

export default GameOverScreenDisplay;
