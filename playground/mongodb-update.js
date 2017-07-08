const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err){
        return console.log('Gagal Konek');
    }
    console.log('Sukses Terkoneksi dengan MongoDB');
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5960e775867e69a16e0d36d5')
    },{
        $set: {
        completed: false,
        text: 'Ini Update ketiga'
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});