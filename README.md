GLOBALIZER
==========

Load libs as Global

Install it
----------

npm install globalizer

Use it
------

```
var globalizer = require('globalizer');

globalizer(['path', 'assert', {
    _: 'lodash',
    gutil: 'gulp-util',
    request: 'supertest',
    Deferred: 'JQDeferred',
    io: 'socket.io-client',
    config: '../../config'
}]);
```

In this example : 

- ``path`` and ``assert`` will be global and name as this
- ``lodash`` will be set as ``_``