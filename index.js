function writeCards(names) {
  let thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
  let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  thankYouMessages.push(message);
  }
  return thankYouMessages;
  }
  let names = ['Alice', 'Bob', 'Charlie'];
let messages = writeCards(names);
console.log(messages);
function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
  console.log(i);
  }
  }