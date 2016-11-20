// Authorization helper module for Nitro app
// Rafal 'bl4de' Janicki | for @Nitro
'use strict'

const Base64 = require('base64-url')
const request = require('request-promise')

// Twitter API keys - in real life app those values should not be commited
// I'm leaving them here just for convenience
const CONSUMER_KEY = 'XACJWHHw5g8ZzHHKhd53PBRmZ'
const CONSUMER_SECRET = 'r6genB8ylAeoNcyFSxSqDkafa1WXyyhitkkZQSKugeyTOtD1kw'

const TwitterAuthHelper = {

    /**
     * Gets bearer token form Twitter API for application-only authentication
     * https://dev.twitter.com/oauth/application-only
     *
     * 
     * @returns {Promise} Promise with fetched token
     */
    getBearerToken() {
        const content = 'grant_type=client_credentials'
        const authToken = 'Basic ' + Base64.encode(`${CONSUMER_KEY}:${CONSUMER_SECRET}`)
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
}

module.exports.TwitterAuthHelper = TwitterAuthHelper