function getInput(name, options) {
  const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
  if (options && options.required && !val) {
    console.log(Object.keys(process.env).sort().join(', '));
    throw new Error(`Input required and not supplied: ${name}`);
  }
  return val.trim();
}

console.log('node (post) ' + getInput('test', {required: true}));
