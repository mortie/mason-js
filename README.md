# mason-js

This is a JavaScript implementation of [MASON](https://github.com/mortie/mason),
a JSON-like object notation.

## Usage

Import mason-js with:

```javascript
import * as mason from "mason";
```

Then parse a string with:

```javascript
mason.parse("some mason string");
```

The `mason.parse` function works similar to `JSON.parse`,
except that it accepts MASON syntax.

## Running tests

To run tests, run `make check`.
This will download the MASON test suite and run it against this implementation.
