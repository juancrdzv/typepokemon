import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChoosePokemonScreenDisplay from './ChoosePokemonScreenDisplay';
import { addCurrentPokemon } from '../../actions/player';
import { changeScreen } from '../../actions/gameManager';
import { PokeButton } from './styled';

class InnerChoosePokemonScreen extends Component {
  createPokeButtons() {
    let arr, styles, positionX, positionY, cont;
    [arr, styles] = [[], []];
    [positionX, positionY, cont] = [0, 0, 0];

    let map = {
      '0': -63,
      '1': -130,
      '2': -190,
      '3': -260,
      '4': -324,
      '5': -390,
      '6': -453,
      '7': -516,
      '8': -576,
    };

    for (let i = 0; i < 151; i++) {
      if (i % 16 === 0 && i > 0) {
        positionX = 0;
        positionY = map[cont.toString()];
        cont++;
      }

      styles.push({
        backgroundPositionX: positionX,
        backgroundPositionY: positionY,
      });

      arr.push(
        <PokeButton
          data-input={'button'}
          style={styles[i]}
          data-id={i + 1}
          key={i + 1}
        />,
      );
      positionX -= 64;
    }
    return arr;
  }

  handlerClick = evt => {
    if (evt.target.dataset.input === 'button') {
      let currentPokemon = this.props.pokemons.filter(
        pokemon => Number(evt.target.dataset.id) === pokemon.id && pokemon,
      )[0];

      this.props.addCurrentPokemon(currentPokemon);
      this.props.changeScreen('game');
    }
  };

  render() {
    return (
      <ChoosePokemonScreenDisplay
        pokeButtons={this.createPokeButtons()}
        handlerClick={this.handlerClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemonData.pokemons,
});

const mapDispatchToProps = dispatch => {
  return {
    addCurrentPokemon: currentPokemon => {
      dispatch(addCurrentPokemon(currentPokemon));
    },
    changeScreen: nextScreen => {
      dispatch(changeScreen(nextScreen));
    },
  };
};

const ChoosePokemonScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerChoosePokemonScreen);

export default ChoosePokemonScreen;
