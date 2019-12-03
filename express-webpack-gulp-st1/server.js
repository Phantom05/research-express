// express server
import express from 'express';
import pathUtil from 'path';

const server = express();
const router = express.Router();

server.use(express.static(pathUtil.join(__dirname, '/client')));
server.get('/', (req, res) => {
  res.json('hello world')
});

server.listen(3000);