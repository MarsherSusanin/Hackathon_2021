const { createPath } = require('./path');
const { getPoints } = require('./points')

const router = app => {
  app.get('/', (request, response) => {
      response.send({
          message: 'HOLODEC на связи!!!'
      })
  })

  app.get('/points', getPoints)

  app.post('/path', createPath)
}


module.exports = router