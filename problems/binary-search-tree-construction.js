function eliminateChar(str) {
  const strArray = str.split('')

  let cleanedStr = ''

  for (let index = 0; index < strArray.length; index++) {
    if (strArray[index + 1] !== '#') {
      cleanedStr += strArray[index]
    }
  }

  return cleanedStr
}
