module.exports = function depression(string) {
  if (typeof string !== "string") throw new TypeError("Give me your name yo!");
  return `Hey there ${string}! Nice to meet you, I'm Moneypenny.`;
};
