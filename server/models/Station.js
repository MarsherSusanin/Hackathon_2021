const Model = require('./Model')

class Station extends Model {
  constructor() {
    super('./server/data/stations.json')
  }
}

module.exports = Station