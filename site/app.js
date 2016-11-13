'use strict'

const CONTENT = document.getElementById('content')
const DEFAULT_USERNAME = '@NitroHQ'

/**
 * Creates single tweet element and appends to content 
 * 
 * @param {object} tweet
 */
function appendTwit(tweet) {
    let tweet_content = document.createElement('div')
    tweet_content.classList = 'tweet-content'
    tweet_content.textContent = `user: ${tweet.user.screen_name} - ${tweet.text}`
    CONTENT.appendChild(tweet_content)
}

/**
 * Process every tweet in returned array of user's tweets
 * 
 * @param {any} [tweets=[]]
 */
function parseTweets(tweets = []) {
    if (tweets.length > 0) {
        tweets.forEach(appendTwit)
    }
}

/**
 * Fetching tweets posted by username
 * 
 * @param {string} [username=DEFAULT_USERNAME]
 */
function fetchTweets(username = DEFAULT_USERNAME) {
    //tbd
    fetch('../dev/sample.json').then(result => {
        result.json().then(tweets => parseTweets(tweets.statuses))
    })
}


// run app
fetchTweets()