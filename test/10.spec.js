const fn = require("../exercises/10")

describe(`Exercise #10`, () => {
  const returnedFunction = fn(3)
  const result = returnedFunction(4)

  test("it calculates the product", () => {
    expect(result).toBe(12)
  })
})
