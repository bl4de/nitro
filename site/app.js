'use strict'

// element holds all tweets
const CONTENT = document.getElementById('content')
// input field for Twitter username
const usernameInput = document.getElementById('username')
// search button
const searchBtn = document.getElementById('search')
// default Twitter username to show tweets
const DEFAULT_USERNAME = '@NitroHQ'



function getBearerToken() {
    const content = 'grant_type=client_credentials'
    const authToken = 'Basic ' + Base64.encode(CONSUMER_KEY + ':' + CONSUMER_SECRET)
    const contentType = 'application/x-www-form-urlencoded;charset=UTF-8'

    const reqSettings = {
        'method': 'POST',
        'body': content,
        'mode': 'no-cors',
        'credentials': 'include',
        'headers': new Headers({
            'Content-Type': contentType,
            'Authorization': authToken,
            'Content-Length': content.length.toString()
        })
    }

    return fetch('https://api.twitter.com/oauth2/token', reqSettings)
}

/**
 * Initialize application
 */
function init() {
    searchBtn.addEventListener('click', searchBtnClickHandler)
    fetchTweets()
}

/**
 * onclick handler for search button
 */
function searchBtnClickHandler() {
    let username = usernameInput.value.trim()
    if (username) {
        fetchTweets()
    }
}

/**
 * Creates single tweet element and appends to content 
 * 
 * @param {object} tweet
 * @param {HTMLElement} parentElement parent element for tweets
 */
function appendTweet(tweet) {
    let tweet_content = document.createElement('div')
    tweet_content.classList = 'tweet-content'

    tweet_content.innerHTML = `
        <h5>\@${tweet.user.screen_name}</h5>
        <p>${tweet.text}</p>
    `

    CONTENT.appendChild(tweet_content)
}

/**
 * clears section with tweets; removes all child elements
 */
function clearTweets() {
    while (CONTENT.firstChild) {
        CONTENT.removeChild(CONTENT.firstChild)
    }
}


/**
 * Process every tweet in returned array of user's tweets
 * 
 * @param {any} [tweets=[]]
 */
function parseTweets(tweets = []) {
    if (tweets.length > 0) {
        tweets.forEach(appendTweet)
    }
}


/**
 * Fetching tweets posted by username
 * 
 * @param {string} username Twitter username to search tweets for
 */
function fetchTweets(username = DEFAULT_USERNAME) {
    //tbd
    getBearerToken().then(response => {
        console.log(response)
        // clear previous tweets
        clearTweets()

        // fetch new tweets
        fetch('../dev/sample.json').then(result => {
            result.json().then(tweets => parseTweets(tweets.statuses))
        })
    })

}
