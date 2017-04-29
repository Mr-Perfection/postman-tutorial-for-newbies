tests["FROG2!"] = true;              // debug message

const ids = JSON.parse(postman.getEnvironmentVariable('bars'));

if (ids.length > 0) {
    postman.setEnvironmentVariable('bar', ids.shift());
    postman.setEnvironmentVariable('bars', JSON.stringify(ids));
    postman.setNextRequest('bar');
    tests["DELETE"] = true;
} else {
    postman.clearEnvironmentVariable('bar');
    postman.clearEnvironmentVariable('bars');
    tests["THE END"] = true;
}
