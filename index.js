const express = require('express')
const cors = require('cors')

const server = express()

const port = 5000

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send(`<h1>Basic API Scaffolding</h1>`)
})

server.get('/api', (req, res) => {
  res.json({ message: 'Basic GET Request Test' })
})

server.listen(port, () => {
  console.log(`\n *** Server Listening on Port ${port} *** \n`)
})