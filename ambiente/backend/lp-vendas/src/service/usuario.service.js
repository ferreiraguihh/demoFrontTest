const banco = require('./index.js');

module.exports.insert = (res, body) => {
    banco
        .insert(body)
        .into('item')
        .then(data => res.send(data))
}