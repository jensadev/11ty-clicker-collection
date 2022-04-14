// Example color-tokens.js
const Color = require("color");

module.exports = [
    {
      name: "primary",
      color: "#4363e9",
    },
    {
        name: "hover-primary",
        color: Color('#4363e9').darken(0.1).hex(),
      },
    {
        name: "text",
        color: "#424242",
    },
    {
        name: "light",
        color: "#fff",
    },
  ];