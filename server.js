const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./server-side/models/userModel');
const routes = require('./server-side/routes/route');

require('dotenv').config({
    path: path.join(__dirname, './.env')
})

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))

mongoose
    .connect('mongodb+srv://ilya:medik852456@cursachcluster.lht8y.mongodb.net/clubDB?retryWrites=true&w=majority', { useFindAndModify: false, useUnifiedTopology: true,  useNewUrlParser: true })
    .then(() => {
        console.log('Подключились к базе данных');
    });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    if (req.headers['x-access-token']) {
        const accessToken = req.headers['x-access-token'];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({ error: 'Пожалуйста, залогиньтесь снова' });
        }
        res.locals.loggedInUser = await User.findById(userId); next();
    } else {
        next()
    }
});

app.use('/api/', routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'))

    app.get('*', ((req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    }))
}

app.listen(PORT, () => {
    console.log('Сервер загружен на порту: ', PORT)
})