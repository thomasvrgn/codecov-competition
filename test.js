const fs = require('fs')

fs.readdir('assets/images/opensource', function (error, content) {
  console.log(content)
})