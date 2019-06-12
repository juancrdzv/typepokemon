import React, { Component } from 'react';
import TutorialScreenDisplay from './TutorialScreenDisplay';
import { changeScreen } from '../../actions/gameManager';
import { connect } from 'react-redux';

class TutorialInnerScreen extends Component {
  returnToHome = () => {
    this.props.changeScreen('name_screen');
  };

  render() {
    return <TutorialScreenDisplay returnToHome={this.returnToHome} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeScreen: screen => {
      dispatch(changeScreen(screen));
    },
  };
};

const mapStateToProps = state => ({});

const TutorialScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TutorialInnerScreen);

export default TutorialScreen;
