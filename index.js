const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('#GOTA GO HOME 6969')
})

app.listen(port, () => {
  console.log(`app running on ${port}`)
})