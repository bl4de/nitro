'use strict'

const CONTENT = document.getElementById('content')

function appendTwit(twit) {
    let twit_content = document.createElement('div')
    twit_content.textContent = `user: ${twit.user.screen_name} - ${twit.text}`
    CONTENT.appendChild(twit_content)
}

fetch('../dev/sample.json').then(result => {
    result.json().then(tweets => {
        tweets.statuses.forEach(appendTwit)
    })
})