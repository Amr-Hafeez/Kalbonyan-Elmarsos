const text = 'This is test - and it should be stored in a file!';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('message.txt', data)
.then(() => console.log('Wrote to file!'));