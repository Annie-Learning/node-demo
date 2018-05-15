const Express = require('express');
const helmet = require('helmet');
const serveStatic = require('serve-static');

const app = Express();

app.use(helmet());
app.use(serveStatic('public'));

app.get('/', function(req, res) {
    console.log('Hello');
    res.send('Hello World');
})

app.get('/home', function(req, res) {
    console.log('Hello');
    res.send('Hello Home');
})

app.get('user/:id', (req, res) => {
    console.log(req.params.id);
    res.send('user id: ' + req.params.id);
})

app.listen(3000, function() {
    console.log('start listen http://localhost:3000');
})