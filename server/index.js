const CONFIG = require('./config')
const app = require('./app')

app.listen(CONFIG.PORT, () => {
  console.log(`app start at http://localhost:${CONFIG.PORT}`)
})

