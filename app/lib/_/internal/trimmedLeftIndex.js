import isSpace from './isSpace';

'use strict';

/**
 * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the first non-whitespace character.
 */
function trimmedLeftIndex(string) {
  var index = -1,
      length = string.length;

  while (++index < length && isSpace(string.charCodeAt(index))) {}
  return index;
}

export default trimmedLeftIndex;
