// Twitter API Helper handles methods to access Twitter API endpoints
// Rafal 'bl4de' Janicki | for @Nitro
'use strict'

const request = require('request-promise')
const twitterAuthHelper = require('./twitterAuthHelper').TwitterAuthHelper

// how many tweets should be fetched
const TWEETS_COUNTER = 8

// Twitter endpoints and paths defs
const TWITTER_API_BASE_URL = 'https://api.twitter.com/1.1/'
const STATUSES_USER_TIMELINE = 'statuses/user_timeline.json'

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

                const requestParams = {
                    method: 'GET',
                    url: `${TWITTER_API_BASE_URL}${STATUSES_USER_TIMELINE}?screen_name=${username}&exclude_replies=true&count=${TWEETS_COUNTER}`,
                    headers: {
                        'Authorization': `Bearer ${resp.access_token}`
                    }
                }
                return request(requestParams).then(resp => {
                    return resp
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                return err
            })
    }
}

module.exports.TwitterApiHelper = TwitterApiHelper