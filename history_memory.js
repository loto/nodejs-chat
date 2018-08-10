const messages = [];

exports.all = function () {
    return Promise.resolve(messages);
}

exports.add = function (msg) {
    return Promise.resolve(messages.push(msg));
}
