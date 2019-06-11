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
    this.props.changeScreen();
  };

  render() {
    return (
      <PlayerScreenDisplay
        playerName={this.state.playerName}
        handleClick={this.handleClick}
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
    changeScreen: () => {
      dispatch(changeScreen('choose_pokemon'));
    },
  };
};

const PlayerScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerPlayerScreen);

export default PlayerScreen;
