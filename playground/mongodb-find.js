const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err){
        return console.log('Gagal Konek');
    }
    console.log('Sukses Terkoneksi dengan MongoDB');
    // berdasarkan id
    // db.collection('Todos').find({
    //     _id: new ObjectID('5960e73a867e69a16e0d36d4')
    // }).toArray().then((docs) => {
    //     console.log ('Todos');
    //     console.log (JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    // ction('Todos').find({completed:false}).toArray().then((docs) => {
    //     console.log ('Todos');
    //     console.log (JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Todos').find({completed : false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    // db.close();
});