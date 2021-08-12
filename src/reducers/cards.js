const cardsReducer = (state = 0, action) => {
  switch(action.type) {
    case 'NEXT':
      return state + action.payload;
    case 'PREV':
      return state - action.payload;
    default:
      return state;
  }
}

export default cardsReducer;