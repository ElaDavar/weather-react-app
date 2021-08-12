export const next = num => {
  return {
    type: 'NEXT',
    payload: num
  }
};

export const prev = num => {
  return {
    type: 'PREV',
    payload: num
  }
};

export const cel = () => {
  return {
    type: 'CELSIUS'
  }
};

export const fah = () => {
  return {
    type: 'FAHRENHEIT'
  }
};