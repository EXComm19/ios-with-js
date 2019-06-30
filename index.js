const express = require('express');
const app = express()
const fs = require('fs')

app.listen(process.env.PORT || 3000, () => console.log('listening at 3000'))
app.use(express.static('public'))

app.get('/save', (request, response) => {
  const data = request.body
  console.log("save");

  fs.writeFile('/public/note.txt', data, (err) => {
    if (err) throw err;
  })

  response.json(data)

})
