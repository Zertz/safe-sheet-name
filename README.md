# safe-sheet-name [![Build Status](https://travis-ci.org/Zertz/safe-sheet-name.svg?branch=master)](https://travis-ci.org/Zertz/safe-sheet-name) [![NPM version](https://badge.fury.io/js/safe-sheet-name.png)](http://badge.fury.io/js/safe-sheet-name)

> Replace disallowed characters (`\/?*[]`) from Excel sheet names and a few others that may cause issues, including `&`


## Install

```
$ npm install --save safe-sheet-name
```


## Usage

```js
const safeSheetName = require('safe-sheet-name')

safeSheetName(' [/?*unicorns & rainbows*?\]   unicorns')
//=> 'unicorns  rainbows'
```


## API

### safeSheetName(input, [options])

#### input

Type: `string`

Sheet name.

#### options

##### replacement

Type: `string`<br>
Default: `''`

Replace disallowed characters with this string.


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
