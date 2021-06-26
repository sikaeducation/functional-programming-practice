const fn = require("../exercises/2")

describe("Exercise #2", () => {
  const callback = jest.fn()
  callback.mockReturnValue(1337)

  test(`returns the same value passed`, () => {
    expect(fn(callback)).toEqual(1337)
  })
  test(`uses the callback function`, () => {
    expect(callback.mock.calls.length).toEqual(1)
  })
})
