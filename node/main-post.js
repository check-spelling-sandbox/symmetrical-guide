function getInput(name, options) {
  const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
  console.log('post: ' + JSON.stringify(process.env));
  if (options && options.required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }
  return val.trim();
}

console.log('node (post) ' + getInput('test', {required: true}));
