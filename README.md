node-globalizer
===============

This node.js module will load a collection of modules and expose them as GLOBAL.

Install it
----------

```
npm install globalizer --save
```

Use it
------

```
require('globalizer')(['path', 'assert', {
    _: 'lodash',
    gutil: 'gulp-util',
    request: 'supertest',
    Deferred: 'JQDeferred',
    io: 'socket.io-client',
    config: '../../config'
}]);
```

Is the same that :

```
GLOBAL.path = require('path');
GLOBAL.assert = require('assert');
GLOBAL._ = require('lodash');
GLOBAL.gutil = require('gulp-util');
GLOBAL.request = require('supertest');
GLOBAL.Deferred = require('JQDeferred');
GLOBAL.io = require('socket.io-client');
GLOBAL.config = require('../../config');
```