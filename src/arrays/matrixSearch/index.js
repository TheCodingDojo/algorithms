/* 
  Matrix Search

  Mike digs image recognition and wants to create a JavaScript Imaging Library, just like PIL for Python. He is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two-dimensional array represents a gray-scale image, where each integer value is a pixel. The second image might be found somewhere within the larger one. Return whether it is.

  Given array: [[12,34,45,56], and array: [[67,78], return true . [98,87,76,65],[43,32] ] [56, 67 , 78 ,89] , [54, 43 , 32 ,21] ]

  Second: Return location of first match found ( [-1,-1] if no match). In example above, return [2,1] .
*/

function matrixSearch(matrix, image) {
  const first = image[0][0];
  const imageHeight = image.length;
  const imageWidth = image[0].length;
  const relevantHeight = matrix.length - imageHeight + 1;
  const relevantWidth = matrix[0].length - imageWidth + 1;

  for (let i = 0; i < relevantHeight; i++) {
    for (let j = 0; j < relevantWidth; j++) {
      if (matrix[i][j] !== first) continue;

      // move in unison until broken
      for (var k = 0, matching = true; k < imageHeight && matching; k++) {
        for (let l = 0; l < imageWidth && matching; l++) {
          if (image[k][l] !== matrix[i + k][j + l]) {
            matching = false;
          }
        }
      }

      if (matching) return [i, j];
    }
  }

  return [-1, -1];
}

module.exports = { matrixSearch };
