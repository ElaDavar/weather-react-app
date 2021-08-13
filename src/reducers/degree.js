const degreeReducer = (state = 0, action) => {
  switch(action.type) {
    case 'CELSIUS':
      return Number((action.payload - 32) * 5/9).toFixed(2);
    case 'FAHRENHEIT':
      return action.payload;
    default:
      return state;
  }
}

export default degreeReducer;
