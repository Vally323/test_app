const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

const HOST = "localhost"
const PORT = 8888

app.use(cors({ origin: '*' }))

app.get('/', (req, res) => { res.send('i wanna work with you!') })

app.use('/tracks', createProxyMiddleware({
    target: 'https://onair.radioapp.io/thisisgo/go/onair.json',
    changeOrigin: true,
    pathRewrite: {
        [`^/tracks`]: '/',
    }
}));

app.listen(PORT,() => console.log(`app running at ${HOST}:${PORT}`))
