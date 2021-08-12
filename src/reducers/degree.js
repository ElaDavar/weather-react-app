const degreeReducer = (state = 1, action) => {
  switch(action.type) {
    case 'CELSIUS':
      return state + 1;
    case 'FAHRENHEIT':
      return state - 1;
    default:
      return state;
  }
}

export default degreeReducer;
