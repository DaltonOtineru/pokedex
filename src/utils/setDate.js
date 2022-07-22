// Reusable utility function which takes in the user input date and converts it to a formatted date

export const setDate = (string) => {
  const date = new Date(string);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleString('en-EN', options);
};
