const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    const uri = "mongodb+srv://amrkhalid:IQz7zhl7lu9tx8a6@cluster0.xwm4bgs.mongodb.net/?retryWrites=true&w=majority"

    MongoClient.connect(uri)
        .then(client => {
            console.log('Connected');
            _db = client.db();
            callback();
        })
        .catch(err => console.log(err));
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;