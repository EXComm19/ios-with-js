const express = require('express');
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser')

app.listen(process.env.PORT || 3000, () => console.log('listening at 3000'))
app.use(express.static('public'))
// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use( bodyParser.urlencoded({ extended: true }) ); // to support URL-encoded bodies
//

// app.post('/save', (request, response) => {
//   console.log(request.body);
//   const data = request.body
//   console.log(data);
//   fs.writeFile('./public/note/note.txt', data, (err) => {
//     if (err) throw err;
//   });
// })

app.post('/save', (request, response) => {
  // console.log(request);
  const data = request.body;
  console.log(data);
  response.json(request.body);
});
