if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const Express = require('express');
const helmet = require('helmet');
const serveStatic = require('serve-static');

const {db, User} = require('./models');

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

app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
});

app.get('/create/user', (req, res) => {
    User.create({
        email: 'a10423006@yuntech.org.tw',
        password: '12345',
        nickname: 'Annie',
        gender: 1
    }).then(user => {
        res.send(user)
    })
});

db.sync().then(() => {
    app.listen(process.env.PORT, function() {
        console.log('start listen http://localhost:3000');
    })
})