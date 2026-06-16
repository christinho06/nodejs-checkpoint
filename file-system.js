// Task 3: File System - create welcome.txt then read hello.txt
const fs = require('fs');

// Create welcome.txt with "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('welcome.txt created successfully');

// Read hello.txt and console.log its data
// (assuming hello.txt exists in the same directory)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading hello.txt:', err.message);
    return;
  }
  console.log(data);
});