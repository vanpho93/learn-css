const express = require('express');
const reload = require('reload');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/bai1', (req, res) => res.render('bai1'));

app.listen(3000, () => console.log('Server started'));

reload(app);
