const app = require('./app.js')
const port = 8080;

app.listen(port, function () {
  console.log(`👌 Express rodando!\n\🚪 http://localhost:${port}`)
})