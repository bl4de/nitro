/**
 * This is minimal HTTP server handles request to Twitter API and returning
 * fetched result(s)
 * 
 * I've used Express framework here'
 */
// Rafal 'bl4de' Janicki | for @Nitro


// importing modules
const express = require('express')

// my helper module
const twitterApiHelper = require('./modules/twitterApiHelper').TwitterApiHelper

// some const define
const app = express()
const PORT = 21001

// path to static resources
app.use(express.static('site'))

// GET user's Twitter stream
app.get('/fetch/:handle', (req, resp) => {
    twitterApiHelper.fetchUserTweets(req.params.handle).then(tweets => {
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