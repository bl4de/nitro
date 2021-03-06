'use strict'

// element holds all tweets
const CONTENT = document.getElementById('content')
// input field for Twitter username
const usernameInput = document.getElementById('username')
// search button
const searchBtn = document.getElementById('search')
// default Twitter username to show tweets
const DEFAULT_USERNAME = '@NitroHQ'

// base url
const BASE_URL = 'http://127.0.0.1:21001'

// Nitro Twitter App - singleton object as there's no need to create more than one instance
// using eg. constructor function pattern
const NitroTwitterApp = {
    /**
     * Initialize application
     */
    init() {
        searchBtn.addEventListener('click', this.searchBtnClickHandler.bind(this))
        usernameInput.addEventListener('focus', () => {
            usernameInput.value = ''
        })
        this.fetchTweets()
    },

    /**
     * onclick handler for search button
     */
    searchBtnClickHandler() {
        let username = usernameInput.value.trim()
        if (username) {
            this.fetchTweets(username)
        }
    },

    /**
     * Creates single tweet element and appends to content 
     * 
     * @param {object} tweet
     * @param {HTMLElement} parentElement parent element for tweets
     */
    appendTweet(tweet) {
        let tweetContent = document.createElement('div')
        tweetContent.classList = 'tweet-content bg-info'
        tweetContent.innerHTML = `
        <h5>\@${tweet.user.screen_name}</h5>
        <p>${tweet.text}
            <br />
            <span class="created-at pull-right">${tweet.created_at}</span>
        </p>
        `
        // normalize username in input field
        if (usernameInput.value.trim() !== tweet.user.screen_name) {
            usernameInput.value = `@${tweet.user.screen_name}`
        }
        CONTENT.appendChild(tweetContent)
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
    parseTweets(tweets = [], username) {
        if (tweets.length > 0) {
            tweets.forEach(this.appendTweet)
        } else {
            CONTENT.innerHTML = `<h5 class="no-tweets-found">No Tweets found, maybe <span class="username">${username}</span> does not exists?`
        }
    },


    /**
     * Fetching tweets posted by username
     * 
     * @param {string} username Twitter username to search tweets for
     */
    fetchTweets(username = DEFAULT_USERNAME) {
        this.clearTweets()
        // fetch new tweets
        fetch(`${BASE_URL}/fetch/${username}`)
            .then(result => {
                result.json()
                    .then(tweets => this.parseTweets(tweets, username))
                    .catch(err => {
                        console.log(err)
                        CONTENT.innerHTML = `<h5 class="no-tweets-found">No Tweets found, maybe <span class="username">${username}</span> does not exists?`
                    })
            }).catch(err => {
                console.log(err)
            })
    }
}
