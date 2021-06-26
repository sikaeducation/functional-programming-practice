const fn = require("../exercises/6")

describe(`Exercise #6`, () => {
  const callback = jest.fn()
  fn(callback)

  test("calls the function with 1337", () => {
    expect(callback.mock.calls[0][0]).toEqual(1337)
  })
})
