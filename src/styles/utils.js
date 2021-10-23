export const getColor =
  (colorName) =>
  ({ theme }) =>
    theme.color[colorName];

export const getFontFamily =
  (fontName) =>
  ({ theme }) =>
    theme.fontFamily[fontName];
