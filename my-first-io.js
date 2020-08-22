'use strict'
const fs = require('fs')

const content = fs.readFileSync(process.argv[2])
const linesNumber = content.toString().split('\n').length - 1
console.log(linesNumber)