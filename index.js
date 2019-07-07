const express = require('express');
const app = express();
const fs = require('fs')
app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log('listening at 3000'))
app.use(express.static('public'))
