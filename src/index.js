
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return []
  }
  for(let i = 0; i < matrix.length; i++) {
    if (i%2 != 0 && i !== 0) {
      result = result.concat(matrix[i].reverse())
    } else {
      result = result.concat(matrix[i])
    }
  }
  console.log(result)
  return result;
}