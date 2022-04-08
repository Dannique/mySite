const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 5000; 




app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => { 
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  res.send("Data is send!"); 
}); 


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   })

app.listen(port, () => console.log(`Listening on port ${port}`)); 