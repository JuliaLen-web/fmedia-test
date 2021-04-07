
const fontMagician = require("postcss-font-magician")({
  variants: {
    Roboto: {
      "400": [],
      "500": []
    }
  },
  foundries: ["google"]
});

module.exports = {
  plugins: [require("autoprefixer"), fontMagician]
};
