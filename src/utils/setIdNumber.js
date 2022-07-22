// Reusable utility function which takes in the pokemon id number as an argument and returns the id number with the correct ammount of zeros as prefix
export const setIdNumber = (id) => {
  if (id < 10) {
    return `#00${id}`;
  } else if (id < 100) {
    return `#0${id}`;
  } else {
    return `#${id}`;
  }
};
