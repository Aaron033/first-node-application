const fs = require('fs')

const book = {
 title: 'Ego is the Enemy', 
 author: 'Aaron Botello'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', )

