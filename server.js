const express = require( 'express' );
const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
const fs = require('fs');
const PORT = process.env.PORT || 5000;  


app.get('/api',(req,res)=>{
   fs.readFile('./server/flights.json','utf8', (err,data)=>{
      if(err){
         console.log(err);
         rec.send('err');
         return;
      }
      res.send(data);
   })
});


app.listen( PORT, () => console.log( `Server started ${ PORT }...` ) );