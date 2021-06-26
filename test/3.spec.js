const fn = require("../exercises/3")

describe(`Exercise #3`, () => {
  const returnedFunction = fn(911)

  test(`return value is a function`, () => {
    expect(typeof returnedFunction).toEqual(`function`)
  })

  test(`returns same value passed`, () => {
    expect(returnedFunction()).toEqual(911)
  })
})
