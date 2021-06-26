const fn = require("../exercises/8")

describe(`Exercise #8`, () => {
  const result = fn(3, 5)

  test("it increments the number", () => {
    expect(result).toBe(8)
  })
})
