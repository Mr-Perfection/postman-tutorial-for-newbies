tests["FROG!"] = true;              // debug message
const ids = JSON.parse(postman.getEnvironmentVariable('foos'));

// this ensures when to go to next request & terminate infinite loops
if (ids.length > 0) {
    postman.setEnvironmentVariable('foo', ids.shift());
    postman.setEnvironmentVariable('foos', JSON.stringify(ids));
    postman.setNextRequest('foo'); // we are running foo requests until foos run out of elements
    tests["PUT"] = true;
} else {
    // clear env. vars
    postman.clearEnvironmentVariable('foo');
    postman.clearEnvironmentVariable('foos');
    tests["Complete marking foosters!"] = true;
    // move onto the next request
    postman.setNextRequest('bar');
}
