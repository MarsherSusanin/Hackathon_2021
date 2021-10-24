const Model = require('./Model')

class Distance extends Model {
  constructor() {
    super('./server/data/distances.json')
  }
}

module.exports = Distance