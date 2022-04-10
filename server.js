const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const helmet = require("helmet");
const handle = app.getRequestHandler()

app.use(express.json())

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);


const main = async () => {
    app.prepare().then(() => {
        const server = express()
        server.use(bodyParser.json())

        server.get("/test", (req, res) => {
            res.send("Message")
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(5000, (err) => {
            if (err) throw err
            console.log('Server running on http://localhost:5000')
        })
    })
}

main()