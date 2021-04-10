/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  if (matrix.length === 3) {
    const arr = matrix.slice(0);
    const arrX = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const arrY = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const arrD = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === true && j !== 0 && j !== 2) {
          arrX[i][j - 1] = 1; arrX[i][j + 1] = 1;
        } else if (arr[i][j] === true && j === 0) arrX[i][j + 1] = 1;
        else if (arr[i][j] === true && j === arr[0].length - 1) arrX[i][j - 1] = 1;
      }
    }
    for (let j = 0; j < arr[0].length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][j] === true && i !== 0 && i !== arr.length - 1) {
          arrY[i - 1][j] = 1; arrY[i + 1][j] = 1;
        } else if (arr[i][j] === true && i === 0) arrY[i + 1][j] = 1;
        else if (arr[i][j] === true && i === arr.length - 1) arrY[i - 1][j] = 1;
      }
    }
    for (let j = 0; j < arr[0].length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][j] === true && i !== 0 && i !== arr.length - 1 && j !== 0 && j !== 2) {
          arrD[0][0] = 1; arrD[0][2] = 1; arrD[2][0] = 1; arrD[2][2] = 1;
        } else if (arr[i][1] === true && i === 0 && j !== 0 && j !== 2) {
          arrD[1][0] = 1; arrD[1][2] = 1;
        } else if (arr[i][1] === true && i === 2 && j !== 0 && j !== 2) {
          arrD[1][0] = 1; arrD[1][2] = 1;
        } else if (arr[i][j] === true && i === 0 && j === 0) arrD[1][1] = 1;
        else if (arr[i][j] === true && i === arr.length - 1 && j === 0) arrD[1][1] = 1;
        else if (arr[i][j] === true && i === 0 && j === arr[0].length - 1) arrD[1][1] = 1;
        else if (arr[i][j] === true && i === arr.length - 1 && j === 2) arrD[1][1] = 1;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        result[i][j] = arrD[i][j] + arrY[i][j] + arrX[i][j];
      }
    }
  } else {
    const arr = matrix.slice(0);
    const arrX = [[0, 0, 0], [0, 0, 0]];
    const arrY = [[0, 0, 0], [0, 0, 0]];
    const arrD = [[0, 0, 0], [0, 0, 0]];
    result = [[0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === true && j !== 0 && j !== 1) {
          arrX[i][j - 1] = 1; arrX[i][j + 1] = 1;
        } else if (arr[i][j] === true && j === 0) arrX[i][j + 1] = 1;
        else if (arr[i][j] === true && j === arr[0].length - 1) arrX[i][j - 1] = 1;
      }
    }
    for (let j = 0; j < arr[0].length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][j] === true && i !== 0 && i !== arr.length - 1) {
          arrY[i - 1][j] = 1; arrY[i + 1][j] = 1;
        } else if (arr[i][j] === true && i === 0) arrY[i + 1][j] = 1;
        else if (arr[i][j] === true && i === arr.length - 1) arrY[i - 1][j] = 1;
      }
    }
    for (let j = 0; j < arr[0].length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[0][j] === true && j !== 0 && j !== 1) {
          arrD[1][0] = 1; arrD[1][2] = 1;
          if (arr[1][j] === true && j !== 0 && j !== 1) {
            arrD[0][1] = 1; arrD[0][2] = 1;
          } else if (arr[0][0] === true) {
            arrD[1][1] = 1;
          } else if (arr[1][0] === true) {
            arrD[0][1] = 1;
          } else if (arr[0][2] === true || arr[1][2]) arrD[1][1] = 1;
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        result[i][j] = arrD[i][j] + arrY[i][j] + arrX[i][j];
      }
    }
  }
  return result;
}
module.exports = minesweeper;
