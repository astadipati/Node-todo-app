const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err){
        return console.log('Gagal Konek');
    }
    console.log('Sukses Terkoneksi dengan MongoDB');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Makan'}).then((result) => {
    //     console.log(result);
    // });
    // delete one
    // db.collection('Todos').deleteOne({text: 'Makan lagi'}).then((result) => {
    //     console.log(result);
    // });
    // findoneand delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    // db.close();
});