const spinner = "|/-\\|/-\\|";
let timeDelay = 0;
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}  `);
  }, timeDelay);
  timeDelay += 200;
};
setTimeout(() => {
  process.stdout.write('\n');
}, timeDelay);