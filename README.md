node-globalizer
===============

This node.js module will load a collection of modules and expose them as GLOBAL.

Install it
----------

```
npm install globalizer
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

In this example : 

- ``path`` and ``assert`` will be global and named as this
- ``lodash`` will be known as ``GLOBAL._``
- ``gulp-util`` will be known as ``GLOBAL.gutil``
- ``supertest`` will be known as ``GLOBAL.request``
- ...