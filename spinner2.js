const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < spinner.length; i++) {
  if (i === spinner.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\r${spinner[i]}\n`);
    }, 300 + (i * 200));
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${spinner[i]}   `);
    }, 300 + (i * 200));
  }
};