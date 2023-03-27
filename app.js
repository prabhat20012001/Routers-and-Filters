// common js module or require js module ////

// const lib=require('./lib.js')
// console.log(lib.diff(3,2),lib.sum(3,4),lib.muk
// // )
// import {sum,diff} from './lib.js';

// console.log(sum(5,6),diff(7,2))

//  const http=require('http');
 const express=require('express');
const bodyParser = require('body-parser');

 const app=express();
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(req,res,next) => {
   res.status(404).send('<h1>Page not found</h1>');
});


//  const server=http.createServer(app);
 app.listen(3000); 