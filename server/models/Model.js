const fs = require('fs')

class Model {
  constructor(dataFile) {
    this._dataFile = dataFile
    this._cache = null
  }

  _load() {
    return new Promise(

      (resolve, reject) => {
        if(this._cache) {

          resolve(this._cache)

        } else {

          fs.readFile(this._dataFile, 'utf-8', 
            (err, data) => {
              if(err) {
                this._cache = []
                reject([])
              } else {
                this._cache = JSON.parse(data)
                resolve(this._cache)
              }
            }
          )

        }
        
    })
  }

  getPromise() {
    return this._promise
  }

  async get(id = null) {
    await this._load()
    return ( !Boolean(id) ) ? this._cache : this._cache.find(({itemID}) => itemID === id) 
  }
}

module.exports = Model