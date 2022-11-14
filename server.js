import express, { response } from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';

import register from './controllers/register.js';
import signin from './controllers/signin.js';
import profile from './controllers/profile.js';
import image from './controllers/image.js';


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'test', 
      database : 'smart-brain'
    }
  });




const app = express();
app.use(cors())
app.use(express.json());  // latest version of exressJS now comes with Body-Parser!



app.get('/', (req, res)=>{ res.send(database.users) })
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) }) 
app.put('/image', (req, res) => { image.handleImage(req, res, db)} )
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})


// import Clarifai from 'clarifai';
// console.log(Clarifai)

//   db.select('*').from('users').then(data => {
//     console.log(data);
//   });


// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });






/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/


// bcrypt.compare("apples", '$2a$10$hDvduel5iTS5aMZUZ2OmQ.SLmghGNZUxyo98typyhw.N1/C4Rl4vi', function(err, res) {
    //     console.log('first guess', res);
    // });
    // bcrypt.compare("veggies", '$2a$10$hDvduel5iTS5aMZUZ2OmQ.SLmghGNZUxyo98typyhw.N1/C4Rl4vi', function(err, res) {
    //     console.log('second guess', res);
    // });
    // if ( req.body.email === database.users[0].email && 
    //     req.body.password === database.users[0].password) {
    //         res.json('success');
    //     } else {
    //         res.status(400).json('error logging in');
    //     }