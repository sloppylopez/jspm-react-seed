import express from 'express';

var server = express();

server.use(express.static('src/views'));
server.use(express.static('./jspm_packages'));
server.use(express.static('.'));
server.use(express.static('src'));

server.get('/', function (req, res) {
    res.render('index')
});

console.log('server listening on port: 3000');
server.listen(3000);