// Twitter API Helper handles methods to access Twitter API endpoints
// Rafal 'bl4de' Janicki | for @Nitro

const request = require('request-promise')
const twitterAuthHelper = require('./twitterAuthHelper').TwitterAuthHelper

// how many tweets should be fetched
const TWEETS_COUNTER = 8
const TwitterApiHelper = {
    /**
     * Fetches 'username' Twitter stream (last TWEETS_COUNTER tweets)
     *  
     * @param {any} username
     * @returns
     */
    fetchUserTweets(username) {
        return twitterAuthHelper.getBearerToken()
            .then(resp => {
                resp = JSON.parse(resp)
                const authToken = `Bearer ${resp.access_token}`
                const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&exclude_replies=true&count=${TWEETS_COUNTER}`

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
}

module.exports.TwitterApiHelper = TwitterApiHelper