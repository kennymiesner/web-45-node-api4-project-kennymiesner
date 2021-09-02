const server = require('express')()

const port = 5000

server.listen(port, () => {
  console.log(`\n *** Server Listening on Port ${port} *** \n`)
})