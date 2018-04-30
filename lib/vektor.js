module.exports = class Vektor {
  // Create an instance of Vektor
  constructor (x, y, z) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0

    // Get magnitude of vector
    this.len = Math.sqrt((x ** 2) + (y ** 2) + (z ** 2))
  }

  divide (otherVec) {
    if (otherVec.x !== 0 && otherVec.y !== 0 && otherVec.z !== 0) {
      // Create new vector by combining old ones
      let newVectorX = this.x / otherVec.x
      let newVectorY = this.y / otherVec.y
      let newVectorZ = this.z / otherVec.z
      // Return result
      return new Vektor(newVectorX, newVectorY, newVectorZ)
    } else {
      throw new Error('Can\'t divide by zero.')
    }
  }

  add (otherVec) {
    // Create new vector by combining old ones
    let newVectorX = this.x + otherVec.x
    let newVectorY = this.y + otherVec.y
    let newVectorZ = this.z + otherVec.z
    // Return result
    return new Vektor(newVectorX, newVectorY, newVectorZ)
  }
}
