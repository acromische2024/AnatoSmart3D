import { execSync, spawn } from 'child_process'
import http from 'http'

const PORT = 3000

// Simple health check server
const server = http.createServer((_req, res) => {
  res.writeHead(502, { 'Content-Type': 'text/html' })
  res.end('<h1>Starting...</h1>')
})

server.listen(PORT, () => {
  console.log(`Health server on ${PORT}`)
})
