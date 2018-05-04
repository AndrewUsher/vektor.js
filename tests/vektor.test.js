/* eslint-disable no-undef */
const Vektor = require('../lib/vektor')
const Vector = new Vektor(5, 10, 15)
// Vector with no values passed in
const phonyVector = new Vektor()
const negativeVector = new Vektor(-2, -5, -1)
const parallelVector = new Vektor(6, 11, 16)
const notParallelVector = new Vektor(-6, -11, -16)

describe('Constructor function', () => {
  test('Vector X should equal this.x', () => {
    expect(Vector.x).toBe(5)
  })

  test('Vector Y should equal this.y', () => {
    expect(Vector.y).toBe(10)
  })

  test('Vector Z should equal this.z', () => {
    expect(Vector.z).toBe(15)
  })

  test('Vector X should default to 0', () => {
    expect(phonyVector.x).toBe(0)
  })

  test('Vector Y should default to 0', () => {
    expect(phonyVector.y).toBe(0)
  })

  test('Vector Z should default to 0', () => {
    expect(phonyVector.z).toBe(0)
  })

  test('this.len returns correct value', () => {
    expect(Vector.len).toBe(18.708286933869708)
  })
})

describe('Divide function', () => {
  test('Dividing by zero should throw error', () => {
    function divide () {
      Vector.divide(phonyVector)
    }

    expect(divide).toThrowError(/zero/)
  })
})

describe('Add function', () => {
  test('Adding with empty vector should return same thing', () => {
    expect(Vector.add(phonyVector)).toMatchObject(Vector)
  })

  test('Adding with negative numbers should work', () => {
    expect(Vector.add(negativeVector)).toMatchObject({ x: 3, y: 5, z: 14 })
  })

  test('Adding with positive numbers should work', () => {
    expect(Vector.add(Vector)).toMatchObject({ x: 10, y: 20, z: 30 })
  })
})

describe('Subtract function', () => {
  test('Subtracting with empty vector should return same thing', () => {
    expect(Vector.subtract(phonyVector)).toMatchObject(Vector)
  })

  test('Subtracting with negative numbers should work', () => {
    expect(Vector.subtract(negativeVector)).toMatchObject({ x: 7, y: 15, z: 16 })
  })

  test('Subtracting with positive numbers should work', () => {
    expect(Vector.subtract(Vector)).toMatchObject({ x: 0, y: 0, z: 0 })
  })
})

describe('Divide function', () => {
  test('Dividing with empty vector should throw error', () => {
    function divide () {
      Vector.divide(phonyVector)
    }
    expect(divide).toThrowError(/zero/)
  })

  test('Dividing with negative numbers should work', () => {
    expect(Vector.divide(negativeVector)).toMatchObject({ x: -2.5, y: -2, z: -15 })
  })

  test('Dividing with positive numbers should work', () => {
    expect(Vector.divide(Vector)).toMatchObject({ x: 1, y: 1, z: 1 })
  })
})

describe('Multiply function', () => {
  test('Multiplying with empty vector should throw error', () => {
    function multiply () {
      Vector.multiply(phonyVector)
    }
    expect(multiply).toThrowError(/zero/)
  })

  test('Multiplying with negative numbers should work', () => {
    expect(Vector.multiply(negativeVector)).toMatchObject({ x: -10, y: -50, z: -15 })
  })

  test('Multiplying with positive numbers should work', () => {
    expect(Vector.multiply(Vector)).toMatchObject({ x: 25, y: 100, z: 225 })
  })
})

describe('isParallel function', () => {
  test('Passing in empty vector should return false', () => {
    expect(Vector.isParallel(phonyVector)).toBe(false)
  })

  test('Passing in a number should return false', () => {
    expect(Vector.isParallel(5)).toBe(false)
  })

  test('Passing in an empty string should return false', () => {
    expect(Vector.isParallel('test')).toBe(false)
  })

  test('Passing in parallel vector should return true', () => {
    expect(Vector.isParallel(parallelVector)).toBe(true)
  })

  test('Passing in vector that\'s not parallel should return false', () => {
    expect(Vector.isParallel(notParallelVector)).toBe(false)
  })
})
