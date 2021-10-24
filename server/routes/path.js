const Path = require("../services/Path")

const createPath = (request, response) => {
  const userPoints = request.body
  new Path(userPoints)
    .load()
    .then((path) => response.send(JSON.stringify(path)))
}

module.exports = {
  createPath
}