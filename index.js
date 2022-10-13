const data = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (let property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}
