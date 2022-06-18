import http from "http"
import promptSync from "prompt-sync"

const prompt = promptSync()

const name = prompt("Input Name")

const host = "localhost"
const port = 8000

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(201)
    res.end("Welcome to my API")
  } else if (req.method === "POST") {
    Welcome(`${name}`)
  }
})

server.listen(port, host, () => {
  console.log(`Server on ${host}:${port}`)
})
