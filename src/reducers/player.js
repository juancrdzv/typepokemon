function playerReducer(state = {}, action) {
  if (action.type === 'ADD_PLAYER_NAME') {
    state = {
      name: action.payload,
      currentPokemon: state.currentPokemon,
      points: 0,
      health: state.health,
      phase: '',
    };
  }
  if (action.type === 'ADD_CURRENT_POKEMON') {
    state = {
      currentPokemon: action.payload,
      name: state.name,
      points: 0,
      health: state.health,
      phase: '',
    };
  }
  if (action.type === 'ADD_POINTS') {
    state = {
      currentPokemon: state.currentPokemon,
      name: state.name,
      points: action.payload,
      health: state.health,
      phase: '',
    };
  }
  if (action.type === 'CHANGE_PHASE') {
    state = {
      currentPokemon: state.currentPokemon,
      name: state.name,
      points: state.points,
      phase: action.payload,
      health: state.health,
    };
  }
  if (action.type === 'CHANGE_HEALTH') {
    state = {
      currentPokemon: state.currentPokemon,
      name: state.name,
      points: state.points,
      phase: state.health,
      health: action.payload,
    };
  }
  return state;
}

export default playerReducer;
