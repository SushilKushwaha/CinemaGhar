
const express = require('express')
const app = express()

const cors = require('cors');

app.use(cors());

const connection = require('./db/connection')
require('dotenv').config()
//body parser
app.use(express.json());
connection();
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
app.use("/user", userRouter);
app.use("/admin", adminRouter);
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})