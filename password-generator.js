// Task 4: Password Generator using generate-password
// npm install generate-password
const generator = require('generate-password');

function generateRandomPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
  });
  return password;
}

const myPassword = generateRandomPassword();
console.log('Generated Password:', myPassword);