'use strict'

// element holds all tweets
const CONTENT = document.getElementById('content')
// input field for Twitter username
const usernameInput = document.getElementById('username')
// search button
const searchBtn = document.getElementById('search')
// default Twitter username to show tweets
const DEFAULT_USERNAME = '@NitroHQ'

// Nitro Twitter App - singleton object as there's no need to create more than one instance
// using eg. constructor function pattern
const NitroTwitterApp = {
    /**
     * Initialize application
     */
    init() {
        searchBtn.addEventListener('click', searchBtnClickHandler)
        fetchTweets()
    },

    /**
     * onclick handler for search button
     */
    searchBtnClickHandler() {
        let username = usernameInput.value.trim()
        if (username) {
            fetchTweets(username)
        }
    },

    /**
     * Creates single tweet element and appends to content 
     * 
     * @param {object} tweet
     * @param {HTMLElement} parentElement parent element for tweets
     */
    appendTweet(tweet) {
        let tweet_content = document.createElement('div')
        tweet_content.classList = 'tweet-content'

        tweet_content.innerHTML = `
        <h5>\@${tweet.user.screen_name}</h5>
        <p>${tweet.text}</p>
        `

        CONTENT.appendChild(tweet_content)
    },

    /**
     * clears section with tweets; removes all child elements
     */
    clearTweets() {
        while (CONTENT.firstChild) {
            CONTENT.removeChild(CONTENT.firstChild)
        }
    },


    /**
     * Process every tweet in returned array of user's tweets
     * 
     * @param {any} [tweets=[]]
     */
    parseTweets(tweets = []) {
        if (tweets.length > 0) {
            tweets.forEach(appendTweet)
        }
    },


    /**
     * Fetching tweets posted by username
     * 
     * @param {string} username Twitter username to search tweets for
     */
    etchTweets(username = DEFAULT_USERNAME) {
        clearTweets()
        // fetch new tweets
        fetch('/fetch/' + username).then(result => {
            result.json()
                .then(tweets => parseTweets(tweets))
                .catch(err => {
                    console.log(err)
                })
        })
    }
}
