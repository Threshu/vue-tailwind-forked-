module.exports = {
  content: [
    "./**/*.{html,js,php,vue,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tw-elements/dist/plugin")],
  corePlugins: {
    visibility: false,
  },
};
