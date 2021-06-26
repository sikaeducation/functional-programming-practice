const fn = require("../exercises/11")

describe(`Exercise #11`, () => {
  const array = [1, 2, 3, 4, 5]
  const result = fn(array)

  test("it's non-destructive", () => {
    expect(array.length).toBe(5)
  })

  test("removes an element from the front of the array", () => {
    expect(result).toEqual([2, 3, 4, 5])
  })
})

