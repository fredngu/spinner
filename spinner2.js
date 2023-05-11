const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let spinTime = 100;
for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, spinTime);
  spinTime += 200;
}