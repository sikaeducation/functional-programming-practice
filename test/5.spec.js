const fn = require("../exercises/5")

describe(`Exercise #5`, () => {
  const result = fn("food", ["for", "thought"])

  test("it appends the strings", () => {
    expect(result).toBe("foodforthought")
  })
})
