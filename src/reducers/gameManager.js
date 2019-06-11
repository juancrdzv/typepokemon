function gameManagerReducer(state = {}, action) {
  if (action.type === 'CHANGE_SCREEN') {
    state = { screen: action.payload };
  }
  return state;
}

export default gameManagerReducer;
