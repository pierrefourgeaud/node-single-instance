# node-single-instance

This package intends to make it easier to have a single instance of an application running.

While the few other packages with the same purpose are either complicated (need a database) or doing the check only on Windows, *single-instance* try to be easy to use and for all platform.

* Why all platforms ?

  It is true that on OSX for example you doesn't need this check but you might want to do something in case someone try to run the application a second time (like focusing the running app for example).

## Usage

* Install it:

    npm install single-instance

* Use it !

    var SingleInstance = require('single-instance');

    var locker = new SingleInstance('my-app-name');

    locker.lock()
    .then(function() {
      // We just locked our application,
      // now we can do what we want !
    })
    .catch(function(err) {
      console.log(err);
      // Quit the application
    })

## Support

* Bugs and feature requests: [Github issue tracker](https://github.com/pierrefourgeaud/node-single-instance/issues?state=open)

## License

The MIT License (MIT)

Copyright (c) 2014 Petka Antonov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.