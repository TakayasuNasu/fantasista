import express from 'express';

var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('main/index', { title: 'Express' });
});

router.get('/hello', (req, res, next) => {
  res.render('main/index', { title: 'the world!!!' });
});

export default router;
