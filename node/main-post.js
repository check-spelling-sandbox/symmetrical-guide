function getInput(name, options) {
  const key = name.replace(/ /g, '_').toUpperCase();
  const val = process.env[`STATE_${key}`] || process.env[`INPUT_${key}`] || '';
  console.log('post: ' + JSON.stringify(process.env));
  if (options && options.required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }
  return val.trim();
}

console.log('node (post) ' + getInput('test', {required: true}));
