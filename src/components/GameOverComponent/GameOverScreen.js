import React, { Component } from 'react';
import { changeScreen } from '../../actions/gameManager';
import { connect } from 'react-redux';
import GameOverScreenDisplay from './GameOverScreenDisplay';

class InnerGameOverScreen extends Component {
  handleClick = () => {
    this.props.changeScreen('choose_pokemon');
  };
  render() {
    return <GameOverScreenDisplay handleClick={this.handleClick} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeScreen: screen => {
      dispatch(changeScreen(screen));
    },
  };
};
const GameOverScreen = connect(
  null,
  mapDispatchToProps,
)(InnerGameOverScreen);

export default GameOverScreen;
