import React, { Component } from 'react';
import PlayerScreenDisplay from './PlayerScreenDisplay';
import { addPlayerName } from '../../actions/player';
import { changeScreen } from '../../actions/gameManager';
import { connect } from 'react-redux';

class InnerPlayerScreen extends Component {
  state = { playerName: '' };

  handleChange = event => {
    this.setState({
      playerName: event.target.value,
    });
  };

  handleClick = () => {
    this.props.addPlayerName(this.state.playerName);
    this.props.changeScreen('choose_pokemon');
  };

  clickToTutorial = () => {
    this.props.changeScreen('tutorial');
  };

  render() {
    return (
      <PlayerScreenDisplay
        playerName={this.state.playerName}
        handleClick={this.handleClick}
        clickToTutorial={this.clickToTutorial}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  playername: state.player.name,
});

const mapDispatchToProps = dispatch => {
  return {
    addPlayerName: playerName => {
      dispatch(addPlayerName(playerName));
    },
    changeScreen: screen => {
      dispatch(changeScreen(screen));
    },
  };
};

const PlayerScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerPlayerScreen);

export default PlayerScreen;
