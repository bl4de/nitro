// CasperJS test suite for Nitro Twitter App
// Rafal 'bl4de' Janicki | for @Nitro

'use strict'
// has to use var as PhantomJS does not handle let/const properly
var casper = require('casper').create()

casper.start('http://127.0.0.1:21001/', function() {
    this.waitForSelector
});


casper.run(function() {
    this.echo('Casper tests started...')
});