// helper module for Nitro app
// Rafal 'bl4de' Janicki | for @Nitro
const Base64 = require('base64-url')
const request = require('request-promise')

// Twitter API keys
const CONSUMER_KEY = 'XACJWHHw5g8ZzHHKhd53PBRmZ'
const CONSUMER_SECRET = 'r6genB8ylAeoNcyFSxSqDkafa1WXyyhitkkZQSKugeyTOtD1kw'

function getBearerToken() {
    const content = 'grant_type=client_credentials'
    const authToken = 'Basic ' + Base64.encode(CONSUMER_KEY + ':' + CONSUMER_SECRET)
    const contentType = 'application/x-www-form-urlencoded;charset=UTF-8'

    const requestParams = {
        method: 'POST',
        body: content,
        url: 'https://api.twitter.com/oauth2/token',
        headers: {
            'Content-Type': contentType,
            'Authorization': authToken,
            'Content-Length': content.length.toString()
        }
    }
    return request(requestParams)
}

function fetchUserTweets(username) {
    return getBearerToken()
        .then(resp => {
            resp = JSON.parse(resp)
            const authToken = 'Bearer ' + resp.access_token
            const url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + username + '&result_type=mixed&count=8'

            const requestParams = {
                method: 'GET',
                url: url,
                headers: {
                    'Authorization': authToken
                }
            }
            return request(requestParams).then(resp => {
                return resp
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err.message)
        })
}

module.exports = {
    getBearerToken: getBearerToken,
    fetchUserTweets: fetchUserTweets
}