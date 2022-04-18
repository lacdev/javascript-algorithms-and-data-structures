function eliminateChar(str) {
  let cleanedStr = ''

  for (let index = 0; index < str.length; index++) {
    if (str[index + 1] !== '#') {
      cleanedStr += str[index]
    }
  }

  return cleanedStr
}
