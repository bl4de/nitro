// importing modules
const express = require('express')

// my helper module
const helper = require('./helper')

// some const define
const app = express()
const PORT = 21001

// path to static resources
app.use(express.static('site'))

// get user's Twitter stream
app.get('/fetch/:handle', (req, resp) => {
    const stream = helper.fetchUserTweets(req.params.handle)
    stream.then(tweets => {
        resp.send(tweets)
    })
})


// let's go!
app.listen(PORT, (err) => {
    if (err) {
        return console.log(`Server cannot run on port ${PORT} because of ${err.toString()}; aborting :( `)
    }
    console.log(`Nitro app started successfully. Server is listening on ${PORT}`)
})