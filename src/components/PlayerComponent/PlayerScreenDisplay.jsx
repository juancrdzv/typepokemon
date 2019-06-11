import React, { Component } from 'react';
import master from '../../images/master.png';
import Grid from '@material-ui/core/Grid';
import Image from '../../images/player.gif';

function PlayerScreenDisplay(props) {
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
      <Grid item xs={6}>
        <img className="master" alt="" src={master} />
      </Grid>
      <Grid item xs={6}>
        <div className="player-form  pokemon-font rounded-borders">
          <label>Player:</label>
          <br />
          <input
            className="pokemon-font rounded-borders-input"
            type="text"
            value={props.playername}
            onChange={props.handleChange}
          />
          <br />
          <input
            className="pokemon-font"
            type="button"
            value="jugar"
            onClick={props.handleClick}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default PlayerScreenDisplay;
