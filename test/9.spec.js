const fn = require("../exercises/9")

describe(`Exercise #9`, () => {
  test("returns true for a match", () => {
    const result = fn(() => "this should match", "this should match")
    expect(result).toBe(true)
  })
  test("returns false for a miss", () => {
    const result = fn(() => "this should match", "this shouldn't match")
    expect(result).toBe(false)
  })
})
