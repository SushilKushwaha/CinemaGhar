
const express = require('express')
const app = express()
const connection = require('./db/connection')
require('dotenv').config()
//body parser
app.use(express.json())
connection()
const userRoute = require('./routes/user')
app.use(userRoute)
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})