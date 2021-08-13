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

export const cel = temp => {
  return {
    type: 'CELSIUS',
    payload: temp
  }
};

export const fah = temp => {
  return {
    type: 'FAHRENHEIT',
    payload: temp
  }
};