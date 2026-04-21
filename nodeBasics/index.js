import chalk from 'chalk';

console.log(chalk.blue('Hello, Node.js!'));
console.log(chalk.red.bold('This is bold red text'));
console.log(chalk.green.underline('Green underlined text'));
console.log(chalk.bgYellow.black(' Text with yellow background '));
console.log(
  chalk.magenta('You can') + ' ' +
  chalk.cyan('combine') + ' ' +
  chalk.hex('#FF8800')('different colors')
);