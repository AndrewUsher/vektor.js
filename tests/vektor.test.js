/* eslint-disable no-undef */
const Vektor = require('../lib/vektor')
const Vector = new Vektor(5, 10, 15)
// Vector with no values passed in
const phonyVector = new Vektor()
const negativeVector = new Vektor(-2, -5, -1)

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
