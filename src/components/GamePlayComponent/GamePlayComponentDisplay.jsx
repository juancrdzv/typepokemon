import React from 'react';
import { BackGroundImage, PokeSpan, PokeChar } from './styled';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

function GamePlayComponentDisplay(props) {
  return (
    <BackGroundImage>
      <Grid container style={{ height: '100%' }}>
        <Grid container direction="row-reverse" justify="flex-start">
          <Grid
            item
            ref={props.computerPokemonRef}
            className="computer-pokemon"
            lg={2}
            md={4}
            sm={4}
            xs={7}
          />
          <Grid item lg={10} sm={8} md={8} xs={5}>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={props.computerlife}
              style={{ height: '30px' }}
            />
            <Grid
              style={{
                backgroundColor: 'white',
                margin: '-48px',
                height: '140px',
                borderBottom: '5px solid',
              }}
              container
              spacing={6}
              direction="row-reverse"
            >
              <Grid item>
                <PokeSpan>{props.computerPokemon.name}</PokeSpan>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              borderRadius: '10px',
              border: '7px solid',
            }}
          >
            {props.word.split('').map((char, ind) => {
              return <PokeChar style={props.wordStyle[ind]}>{char}</PokeChar>;
            })}
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end">
          <Grid
            item
            ref={props.playerPokemonRef}
            className="player-back-pokemon"
            lg={2}
            md={4}
            sm={4}
            xs={7}
          />
          <Grid item lg={10} sm={8} md={8} xs={5}>
            <Grid
              style={{
                backgroundColor: 'white',
                marginLeft: '1px',
                marginBottom: '-29px',
                height: '140px',
                borderTop: '5px solid',
              }}
              container
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item style={{ paddingRight: '24px' }}>
                <PokeSpan>{props.pokemon.name}</PokeSpan>
              </Grid>
              <Grid item style={{ paddingRight: '24px' }}>
                <PokeSpan>Points :{props.points}</PokeSpan>
              </Grid>
              <Grid item style={{ paddingRight: '24px' }}>
                <PokeSpan>Time :{props.time}</PokeSpan>
              </Grid>
              <Grid item style={{ paddingRight: '24px' }}>
                <PokeSpan>Phase :{props.phase}</PokeSpan>
              </Grid>
            </Grid>
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={props.life}
              style={{ height: '30px' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </BackGroundImage>
  );
}

export default GamePlayComponentDisplay;
