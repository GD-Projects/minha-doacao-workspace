var express = require('express');
var app = express();
app.listen(3001);
app.get('/teste', (req: any, res: any) => {
    res.sendFile(__dirname + '/teste.html')
})
console.log('Hello Galinha da Agua!')