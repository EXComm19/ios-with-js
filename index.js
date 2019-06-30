const express = require('express');
const app = express()
const fs = require('fs')

app.listen(process.env.PORT || 3000, () => console.log('listening at 3000'))
app.use(express.static('public'))

app.post('/save', (request, response) => {
  console.log("server");
  const data = request.body
  console.log(data);
  // console.log("save");
  //
  // // fs.writeFile('/public/note.txt', data, (err) => {
  // //   if (err) throw err;
  // // })
  //
  response.json(data)
  // console.log(data);

})
