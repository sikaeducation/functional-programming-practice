const fn = require("../exercises/1")

const charCodes = {
  encrypt: (word) => word.split('').map(char => char.charCodeAt(0)),
  decrypt: (charCodes) => String.fromCharCode(...charCodes)
}

describe("Exercise #1", () => {
  test(`returns an array with the correct items`, () => {
    const encryptedAnswer = fn().map(word => charCodes.encrypt(word))
    expect(encryptedAnswer)
      .toEqual([
        [112, 111, 112],
        [112, 117, 115, 104],
        [114, 101, 118, 101, 114, 115, 101],
        [115, 104, 105, 102, 116],
        [115, 112, 108, 105, 99, 101]
      ])
  })
})
