const express = require('express')
const app = express()
const port = 21001

app.use(express.static('site'))

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})