module.exports = function reverse (n) {
  const posNum = n < 0 ? n * -1 : n
  const arr = Array.from(String(posNum))
  const reverseArr = arr.reverse()
  const result = Number(reverseArr.join(''))
  
  return result
}

