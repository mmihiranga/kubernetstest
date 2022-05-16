const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('#GOTA GO HOME !!!!!!!!!!')
})

app.listen(port, () => {
  console.log(`app running on ${port}`)
})