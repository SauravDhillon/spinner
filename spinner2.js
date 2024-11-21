const spinnerElements = ['|  ','/  ','-  ','\\  ','|  '];
spinnerElements.forEach((element, index) => {
  setTimeout(() => process.stdout.write(`\r${element}`), 300 * index);
});