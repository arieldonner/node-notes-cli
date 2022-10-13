

const data = require('./data.json');
const fs = require('fs');
const command = process.argv[2]
const input = process.argv[3]
let nextId = data.nextId

if (command === 'read') {
  for (let property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}else if (command === 'create'){
  data.notes[nextId] = String(input);
  data.nextId++;
  nextId = data.nextId;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, (error)=> {if (error) throw error})
}
