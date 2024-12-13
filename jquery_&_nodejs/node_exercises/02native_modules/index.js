const fs = require("fs"); // "File System"

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
// 	if (err) {
//     throw new err
//   } else {
//     console.log('Successfully written.')
//   }
// });


fs.readFile('./message.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
})