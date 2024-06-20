const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const usersRouter = require('./routes/users')

app.get('/', (req, res) => res.send('default route'))

app.use(bodyParser.json())
app.use(usersRouter)

app.listen(port, () => {
  console.log('app is listening on:', port)
})