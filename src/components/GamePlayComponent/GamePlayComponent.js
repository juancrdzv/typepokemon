import React, { Component } from 'react';
import { connect } from 'react-redux';
import words from '../../data/words';
import GamePlayComponentDisplay from './GamePlayComponentDisplay';
import {
  addPoints,
  changePhase,
  changeHealth,
  addCurrentPokemon,
} from '../../actions/player';
import { changeScreen } from '../../actions/gameManager';

class InnerGamePlayComponent extends Component {
  constructor(props) {
    super(props);

    let compuPokemon, computerPokemonIndex, indexWord;

    [computerPokemonIndex, indexWord] = [
      Math.floor(Math.random() * 150),
      Math.floor(Math.random() * 100),
    ];

    compuPokemon = this.props.pokemons[computerPokemonIndex];

    this.playerPokemon = React.createRef();
    this.computerPokemon = React.createRef();
    this.gameLoop = null;

    this.state = {
      compuPokemon: compuPokemon,
      gamePlayState: { currentWord: words[indexWord], phase: '' },
      wordCount: 0,
      time: this.getWritetime(words[indexWord]),
      refs: [],
      computerHealth: 100,
    };

    this.listener = event => {
      this.keyHandler(event);
    };

    document.addEventListener('keydown', this.listener);
  }

  changeRefBackGroundPosition(ref, refName, propsOrState) {
    ref.current.style.backgroundPositionX = this[propsOrState][
      refName
    ].backgroundPositionX;
    ref.current.style.backgroundPositionY = this[propsOrState][
      refName
    ].backgroundPositionY;
  }

  componentDidMount() {
    this.changePhaseToAttackOrDeffend();

    let intervalTime = 0;

    this.changeRefBackGroundPosition(this.playerPokemon, 'pokemon', 'props');
    this.changeRefBackGroundPosition(
      this.computerPokemon,
      'compuPokemon',
      'state',
    );

    this.gameLoop = setInterval(() => {
      let time = this.state.time;

      if (this.props.health <= 0) {
        this.endGame();
        return;
      }

      if (this.state.wordCount >= this.state.gamePlayState.currentWord.length) {
        if (this.props.phase === 'attack') {
          let currentComputerHealth = this.state.computerHealth - 20;

          currentComputerHealth <= 0
            ? this.resetComputerPokemon()
            : this.setState({ computerHealth: currentComputerHealth });
        }
        this.props.addPoints(this.props.points + 5);
        this.resetPhase();
        time = this.getWritetime(this.state.gamePlayState.currentWord);
      }

      if (intervalTime > 0 && intervalTime % 1000 === 0) {
        time--;
        if (time < 0) {
          this.resetPhase();
          time = this.getWritetime(this.state.gamePlayState.currentWord);
        }
        this.setState({ time: time });
      }

      intervalTime += 100;
    }, 100);
  }

  componentWillUnmount() {
    [
      this.playerPokemon,
      this.playerLifeBar,
      this.computerPokemon,
      this.computerLifeBar,
    ] = [null, null, null, null];

    document.removeEventListener('keydown', this.listener);
    clearInterval(this.gameLoop);
  }

  changePhaseToAttackOrDeffend = () => {
    let rand = Math.floor(Math.random() * 10 + 1);
    rand <= 5
      ? this.props.changePhase('defend')
      : this.props.changePhase('attack');
  };

  endGame = () => {
    this.props.changeScreen('game_over');
    this.props.addCurrentPokemon({});
    this.props.addPoints(0);
    this.props.changeHealth(100);
    this.props.changePhase('');
  };

  getWritetime = words => {
    let time;
    time = Math.floor((words.length * 1.25) / 2);
    if (time <= 1) {
      time = 2;
    }
    return time;
  };

  keyHandler = event => {
    const keyName = event.key;

    if (keyName.length > 1) {
      return;
    }

    if (
      this.state.gamePlayState.currentWord[this.state.wordCount] === keyName
    ) {
      let refsClone = [...this.state.refs];

      refsClone[this.state.wordCount] = { color: 'yellow' };

      this.setState({
        wordCount: this.state.wordCount + 1,
        refs: refsClone,
      });
    } else {
      let currentPlayerHealth =
        this.props.phase === 'defend'
          ? this.props.health - 30
          : this.props.health - 5;

      this.props.changeHealth(currentPlayerHealth);

      this.resetPhase();
    }
  };

  resetComputerPokemon = () => {
    let computerPokemonIndex, indexWord, compuPokemon;

    [computerPokemonIndex, indexWord] = [
      Math.floor(Math.random() * 150),
      Math.floor(Math.random() * 100),
    ];

    compuPokemon = this.props.pokemons[computerPokemonIndex];

    this.setState({
      computerHealth: 100,
      compuPokemon: compuPokemon,
      gamePlayState: { currentWord: words[indexWord], phase: '' },
    });
    this.changePhaseToAttackOrDeffend();
    this.changeRefBackGroundPosition(
      this.computerPokemon,
      'compuPokemon',
      'state',
    );
  };

  resetPhase = () => {
    let indexWord = Math.floor(Math.random() * 100);

    this.changePhaseToAttackOrDeffend();

    this.setState({
      gamePlayState: { currentWord: words[indexWord], phase: '' },
      refs: [],
      wordCount: 0,
      time: this.getWritetime(words[indexWord]),
    });

    for (let i = 0; i < this.state.gamePlayState.currentWord.length; i++) {
      let newArr = this.state.refs.concat([{ color: 'green' }]);
      this.setState({
        refs: newArr,
      });
    }
  };

  render() {
    return (
      <GamePlayComponentDisplay
        playerPokemonRef={this.playerPokemon}
        computerPokemonRef={this.computerPokemon}
        computerPokemon={this.state.compuPokemon}
        pokemon={this.props.pokemon}
        time={this.state.time}
        word={this.state.gamePlayState.currentWord}
        wordStyle={this.state.refs}
        points={this.props.points}
        phase={this.props.phase}
        life={this.props.health}
        computerlife={this.state.computerHealth}
      />
    );
  }
}

const mapStateToProps = state => ({
  phase: state.player.phase,
  pokemon: state.player.currentPokemon,
  pokemons: state.pokemonData.pokemons,
  points: state.player.points,
  health: state.player.health,
});

const mapDispatchToProps = dispatch => {
  return {
    addPoints: points => {
      dispatch(addPoints(points));
    },
    changePhase: phase => {
      dispatch(changePhase(phase));
    },
    changeHealth: health => {
      dispatch(changeHealth(health));
    },
    changeScreen: screen => {
      dispatch(changeScreen(screen));
    },
    addCurrentPokemon: currentPokemon => {
      dispatch(addCurrentPokemon(currentPokemon));
    },
  };
};

const GamePlayComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerGamePlayComponent);

export default GamePlayComponent;
