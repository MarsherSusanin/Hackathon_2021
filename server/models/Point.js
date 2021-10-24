const Model = require('./Model')

class Point extends Model {
  constructor() {
    super('./server/data/points.json')
  }
}

module.exports = Point