const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const lrangeAsync = promisify(client.lrange).bind(client);
const rpushAsync = promisify(client.rpush).bind(client);
const ltrimAsync = promisify(client.ltrim).bind(client);

client.on('connect', function () {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

exports.all = function () {
    return lrangeAsync('chat history', 0, -1)
}

exports.add = function (msg) {
    return rpushAsync('chat history', msg)
        .then(
            ltrimAsync('chat history', -10, -1)
        )
}
