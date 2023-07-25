/*
We don't need anything here. This entire file can be deleted.
It has to be deleted carefully, because if it's deleted with everything as-is, that will probably break something....
*/

module.exports = {
  // maybe this is actually necessary..?
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {

    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();
    
  if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};