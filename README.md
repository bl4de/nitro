## Nitro Twitter App

## About

This is my implementation of Nitro F/E Developer Homework Assignment.

Application is working correctly in latest Firefox, Chrome, Chromium and Opera browsers.

It's not working in Safari because of no Fetch API implemented in WebKit.
I did not test it in IE/Edge

Dev stack (tools, libraries) I've used includes:

- Express 4.14, nodemon, eslint, Node 6.9.1, npm 4.0.3, yarn 0.17.5, Git 2.9.3 (Apple Git-75) (server-side)
- Bootstrap 3.3.7, eslint, Chromium 57.0.2927.0 64bit (client-side)
- Visual Studio Code (IDE)


## Installation

#### Clone repository into your local machine using:
```
$ git clone https://github.com/bl4de/nitro.git
```

#### Install required npm dependiences using ```npm``` or ```yarn``` package manager.

With ```npm``` run the following command in the main directory of cloned repository:

```
$ npm install
```

With ```yarn``` (recommended) execute following command:

```
$ yarn
```

Any of those commands will create ```node_modules``` directory and install all required dependencies.


#### Run server and enjoy the Nitro Twitter App

In your command line execute following command:

```
$ node server.js
```

Then, in your browser, open following address:

http://127.0.0.1:21001/nitro.html

## How to run tests

I've used PhantomJS with CasperJS as I am already familiar with this set. Unfortunately, because of lot ES6 features I've used, I couldn't finish this part of Developer Homework Assignment.

#### Download and install Phantom JS

Download a valid package for your OS from http://phantomjs.org/download.html and extract it.

Then, add path to ```path_to_extracted_phantomjs/bin/phantomjs``` to your PATH environment variable.

More info: http://phantomjs.org

Next, install CasperJS by running this command:

```
$ npm install casperjs -g
```

More info: http://docs.casperjs.org/en/latest/quickstart.html


#### Run tests

To run tests, simply run following command in command line:

```
$ npm test
```

## Summary

Unfortunately, CasperJS tests does not work correctly, because of a lot of ES6 features not implemented in PhantomJS yet. I should check this first on https://kangax.github.io/compat-table/es6/#phantom - I just missed this.

I did not try proposed WebDriverJS because I am currently out of time for this coding test.

If it's possible I can provide tests based on WebDriverJS later this week.

Thanks again for this great coding exercise - it was really fun even if I did not do it well enough :)

Rafal Janicki


