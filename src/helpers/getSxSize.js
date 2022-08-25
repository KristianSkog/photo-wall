/**
 * Return the best suitable { width: and height: } for the ImageList's 'sx' property based on the viewport.
 * @param {Object} sizes - screen sizes as boolean, e.g. { isXl: bool, isLg: bool}
 * @returns Object { width: value, height: value }
 */
function getSxSize({ ...sizes }) {
  const { isXl, isLg, isMd } = sizes;
  if (isXl) {
    return { width: 1200, height: 650 };
  }
  if (isLg) {
    return { width: 900, height: 450 };
  }
  if (isMd) {
    return { width: 700, height: 450 };
  }
  return { width: 500, height: 450 };
}

export default getSxSize;
