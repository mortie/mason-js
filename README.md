# mason-js: MASON implementation for JavaScript

This is a JavaScript implementation of [MASON](https://github.com/mortie/mason),
a JSON-like object notation.

## Usage

Install the [@mort/mason](https://www.npmjs.com/package/@mort/mason) NPM package:

```
npm install --save @mort/mason
```

Import the library with:

```javascript
import * as mason from "@mort/mason";
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
