/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = names.slice(0);
  let counter = 0;
  function searchRec(arr) {
    counter++;
    let changeFlag = 0;
    arr.map((element, index, array) => {
      const tempIndex = array.slice(index + 1).findIndex((element2) => element === element2);
      if (tempIndex !== -1) {
        changeFlag++; result[tempIndex + index + 1] = `${element}(${counter})`;
      } return element;
    });
    if (changeFlag === 0) return result;
    return searchRec(result);
  }
  return searchRec(result);
}

module.exports = renameFiles;
