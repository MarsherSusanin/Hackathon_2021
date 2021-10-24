const Distance = require("../models/Distance")
const Point = require("../models/Point")

class Graph {
  constructor(userPoints) {
    this._pointModel = new Point()
    this._distanceModel = new Distance()
    this._userPoints = userPoints
  }

  async _getPoints() {
    const points = await this._pointModel.get();
    const distances = await this._distanceModel.get()
    return this.userPoints.map(({pointID}) => points.find((itemID) => itemID === pointID))
  }

  async create() {
    const points = await this._getPoints();
    const path = [];
    
    for([ i, { id: pointStartID, station: stationStartID } ] of enumerate(points)) {
      for({ station: stationDestinationID } of points.splice(i, 1)) {
        path.push(distances.find(
          ({ start_point, destination_point}) => start_point === stationStartID && destination_point === stationDestinationID
        ))
      }
    }

    return path
  }
}

module.exports = Graph