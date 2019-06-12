import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerScreen from '../PlayerComponent/PlayerScreen';
import ChoosePokemonScreen from '../ChoosePokemonComponent/ChoosePokemonScreen';
import GamePlayComponent from '../GamePlayComponent/GamePlayComponent';
import GameOverScreen from '../GameOverComponent/GameOverScreen';
import TutorialScreen from '../TutorialComponent/TutorialScreen';

class InnerGameManager extends Component {
  constructor(props) {
    super(props);
    this.gameState = {
      name_screen() {
        return <PlayerScreen />;
      },
      choose_pokemon() {
        return <ChoosePokemonScreen />;
      },
      game() {
        return <GamePlayComponent />;
      },
      game_over() {
        return <GameOverScreen />;
      },
      tutorial() {
        return <TutorialScreen />;
      },
    };
  }
  render() {
    let state = this.props.gameState || 'name_screen';
    return this.gameState[state]();
  }
}

const mapStateToProps = state => ({
  gameState: state.gameManager.screen,
});

const GameManager = connect(
  mapStateToProps,
  null,
)(InnerGameManager);

export default GameManager;
