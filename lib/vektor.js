module.exports = class Vektor {
  // Create an instance of Vektor
  constructor (x, y, z) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0

    // Get magnitude of vector
    this.len = Math.sqrt((x ** 2) + (y ** 2) + (z ** 2))
  }
}
