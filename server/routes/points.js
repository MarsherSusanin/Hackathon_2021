const Point = require('../models/Point')

const getPoints = (request, response) => {
  new Point()
    .get()
    .then((points) => response.send(JSON.stringify(points)))
}

module.exports = {
  getPoints
}