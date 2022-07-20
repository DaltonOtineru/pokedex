export const setIdPrefix = (id) => {
  if (id < 10) {
    return '#00';
  } else if (id < 100) {
    return '#0';
  } else {
    return '#';
  }
};
