require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send(`<h1>Basic API Scaffolding Project</h1>`)
})

server.get('/api', (req, res) => {
  res.json({ message: 'Basic GET Request Test' })
})

server.listen(PORT, () => {
  console.log(`\n *** Server Listening on Port ${PORT} *** \n`)
})
