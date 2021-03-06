import passport from 'passport';

import Index from "../controllers/main/index-controller";
import Users from "../controllers/main/users-controller";
import Memos from "../controllers/main/memos-controller";
import Auth  from "../controllers/main/auth-controller";

import Comments from "../controllers/api/comments-controller";

export default function dispach(app) {

  const index = new Index();
  app.get('/', (req, res) => {index.index(req, res)});
  app.get('/hello', (req, res) => {index.hello(req, res)});

  const users = new Users("ken");
  app.get('/user/:id', (req, res) => {users.index(req, res);});

  const memos = new Memos();
  app.get('/memo(/:id([a-z]+))?', (req, res) => {memos.index(req, res)});

  const auth = new Auth();
  app.get('/auth/login', (req, res) => {auth.login(req, res)});
  app.post('/login', passport.authenticate('local',
    { successRedirect: '/hello', failureRedirect: '/auth/login' }));

  const comments = new Comments();
  app.get( '/api/comments', (req, res) => {comments.index(req, res)});
  app.post('/api/comments', (req, res) => {comments.index(req, res)});

}
