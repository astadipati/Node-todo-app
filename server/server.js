
// library import
var express = require('express');
var bodyParser = require('body-parser'); //JSON convert into object

// local import
var {mongoose} = require ('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// midleware

app.use(bodyParser.json());
// end middleware

app.post('/todos',(req, res)=> {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log ('Started di port 3000');
});


















// save new something
// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed:{
//       type: Boolean,
//       default: false
//     },
//     completedAt:{
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Hi kawan'
// });

// newTodo.save().then(() =>{
//     console.log('sukses simpan todo', doc);
// }, (e) => {
//     console.log('gagal simpan todo' )
// });
// var otherTodo = new Todo({
//     text: 'Makan'
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined,2));
// }, (e) => {
//     console.log('Gagal Simpan', e)
// });

    // var User = mongoose.model('User',{
    //     email: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         minlength: 1
    //     }
    // });

    // var user = new User({
    //     email: 'rama@gmail.com'
    // });

    // user.save().then((doc) => {
    //     console.log(JSON.stringify(doc, undefined,2));
    // }, (e) => {
    //     console.log('Unable to save', e);
    // });


















