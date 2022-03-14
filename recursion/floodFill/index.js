// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

/* 
  Flood Fill

  Most graphical “paint” applications, have a ‘paint can fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.
  
  Input:
  [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3] 
  ]

  and startXY of [2,2], and newColor of 1.
  
  we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

  Output: 
  [
    [3, 2, 1, 4, 3],
    [2, 1, 1, 4, 0],
    [7, 1, 1, 5, 3],
    [6, 5, 1, 4, 1],
    [1, 2, 1, 1, 1 ] 
]
*/

/**
 * Replaces the originalColor with the newColor from the startXY for every
 * neighboring pixels that is the originalColor.
 * - Time: O(n * m). n is canvas2d.length and m is max len of the child arrays.
 * - Space: O(n * m) due to the call stack size based on total pixels that can
 *    be painted.
 * @param {number[][]} canvas2D The pixels to paint.
 * @param {[number, number]} startXY The starting point.
 * @param {string} newColor
 * @param {string} originalColor
 * @returns {number[][]} The painted canvas.
 */
function floodFill(canvas2D, startXY, newColor, originalColor = null) {
  const x = startXY[0];
  const y = startXY[1];

  if (originalColor && canvas2D[y][x] !== originalColor) {
    return;
  }

  let changed = false;

  if (!originalColor) {
    originalColor = canvas2D[y][x];
  }

  if (canvas2D[y][x] === originalColor) {
    canvas2D[y][x] = newColor;
    changed = true;
  }

  if (changed) {
    if (y - 1 >= 0) {
      floodFill(canvas2D, [x, y - 1], newColor, originalColor);
    }

    if (x + 1 < canvas2D[0].length) {
      floodFill(canvas2D, [x + 1, y], newColor, originalColor);
    }

    if (y + 1 < canvas2D.length) {
      floodFill(canvas2D, [x, y + 1], newColor, originalColor);
    }

    if (x - 1 >= 0) {
      floodFill(canvas2D, [x - 1, y], newColor, originalColor);
    }
  }

  return canvas2D;
}

module.exports = {
  floodFill,
};
