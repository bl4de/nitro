## Nitro Twitter App

### Installation

#### Clone repository into your local machine using:
```
$ git clone https://github.com/bl4de/nitro.git
```

#### Install required npm dependiences using ```npm``` or ```yarn``` package manager.

With ```npm``` run the following command in the main directory of cloned repository:

```
$ npm Install
```

With ```yarn``` execute following command:

```
$ yarn
```

Both commands create ```node_modules``` directory and install all required libraries.


#### Run server and enjoy the App

In your command line execute following command:

```
$ node server.js
```

Then, in your browser, open following address:

http://127.0.0.1:21001/nitro.html

### How to run tests

I've used PhantomJS with CasperJS as I am already familiar with this set.

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




