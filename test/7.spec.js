const fn = require("../exercises/7")

describe(`Exercise #7`, () => {
  const array = [1, 2, 3, 4, 5]
  const result = fn(array, 2, 2)

  test("doesn't mutate the original array", () => {
    expect(array.length).toEqual(5)
  })

  test("returns a spliced array", () => {
    expect(result).toEqual([1, 2, 5])
  })
})
