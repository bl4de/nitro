// CasperJS test suite for Nitro Twitter App
// Rafal 'bl4de' Janicki | for @Nitro

casper.test.begin('Nitro Twitter App test suite', 10, function suite(test) {
    casper.start('http://127.0.0.1:21001/nitro.html', function() {
        test.assertVisible('input[id="username"]', 'input#username is visible')
        test.assertVisible('button[id="search"]', 'button#search is visible')
        // by default, six @NitroHQ tweets should be populated
        this.captureSelector('screenshots/start.png', 'body');
        casper.waitForSelector('div.tweet-content', function() {
            test.assertElementCount('div.tweet-content', 6)
            test.assertSelectorHasText('h5', '@NitroHQ')
        })

    })

    casper.run(function() {
        test.done()
    })
})