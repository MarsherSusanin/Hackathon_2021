const axios = require("axios");
const Graph = require("./Graph");
const { PATH_API_URL, IS_NOT_LOAD_PATH } = require('../config')

class Path{
  constructor(userPoints) {
    this._userPoints = userPoints
    this._graphService = new Graph(userPoints)
  }

  async load() {
    const graph = await this._graphService.create()
    if(IS_NOT_LOAD_PATH) {
      return this._userPoints.sort(() => Math.random() - 0.5)
    }
    return await axios.post(PATH_API_URL, graph)
  }
}

module.exports = Path