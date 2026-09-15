const tokens = require('../json tokens/design-tokens.json');

const cssVariable = (name, prefix) => `var(--${prefix}${name}-)`;
const mapTokens = (values, prefix) => Object.fromEntries(
  Object.keys(values).map((name) => [name, cssVariable(name, prefix)])
);

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: mapTokens(tokens.colors, 'dc-'),
      fontFamily: Object.fromEntries(
        Object.keys(tokens.fontFamily).map((name) => [name, `var(--font-family-${name})`])
      ),
      fontSize: Object.fromEntries(
        Object.keys(tokens.fontSize).map((name) => [name, `var(--font-size-dc-${name})`])
      ),
      fontWeight: Object.fromEntries(
        Object.keys(tokens.fontWeight).map((name) => [name, `var(--font-weight-${name})`])
      ),
      lineHeight: Object.fromEntries(
        Object.keys(tokens.lineHeight).map((name) => [name, `var(--line-height-${name})`])
      ),
      letterSpacing: Object.fromEntries(
        Object.keys(tokens.letterSpacing).map((name) => [name, `var(--letter-spacing-${name})`])
      ),
      spacing: mapTokens(tokens.spacing, 'dc-'),
      screens: tokens.screens,
      boxShadow: Object.fromEntries(
        Object.keys(tokens.boxShadow).map((name) => [name, `var(--dc-shadow-${name})`])
      )
    }
  }
};
