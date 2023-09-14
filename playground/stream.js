const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });   // start to read a file and make a stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');   // prepare to write chunks or smth

// readStream.on('data', (chunk) => {  // event listener; listening when 'data' comes
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);   // alternative to the block above