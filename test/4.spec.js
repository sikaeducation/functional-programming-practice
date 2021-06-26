const fn = require("../exercises/4")

describe(`Exercise #4`, () => {
  const array = ['Denver', 'Colorado']
  const result = fn(array, 'Education')

  test(`does not change original array`, () => {
    expect(array.length).toEqual(2)
  })

  test(`has new value added`, () => {
    expect(result).toEqual(['Denver', 'Colorado', 'Education'])
  })
})
