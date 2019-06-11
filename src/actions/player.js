export function addPlayerName(payload) {
  return { type: 'ADD_PLAYER_NAME', payload };
}

export function addCurrentPokemon(payload) {
  return { type: 'ADD_CURRENT_POKEMON', payload };
}

export function addPoints(payload) {
  return { type: 'ADD_POINTS', payload };
}

export function changePhase(payload) {
  return { type: 'CHANGE_PHASE', payload };
}

export function changeHealth(payload) {
  return { type: 'CHANGE_HEALTH', payload };
}
