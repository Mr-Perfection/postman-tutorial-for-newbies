// GET /payment
let jsonData = JSON.parse(responseBody);

let foos = [],
    bars = [];
jsonData.forEach(function(element) {
    //...
    foos.push(element.id);
    bars.push(element.id);
    //...
});
// Removing the first element from foos and set it as foo env var.
postman.setEnvironmentVariable("foo", foos.shift());
// Convert the list object foos into JSON data type
postman.setEnvironmentVariable("foos", JSON.stringify(foos));

// ..
postman.setEnvironmentVariable("bar", bars.shift());
//..
postman.setEnvironmentVariable("bars", JSON.stringify(bars));
tests["let's start foo first: " + environment.id] = true;
postman.setNextRequest('foo'); // this will call the next request called foo (you can name your request)
