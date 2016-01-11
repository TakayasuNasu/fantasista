import Index from "../controllers/main/index-controller";
import Users from "../controllers/main/users-controller";
import Comments from "../controllers/api/comments-controller";

export default function dispach(app) {

  const index = new Index();
  app.get('/', (req, res) => {index.index(req, res)});
  app.get('/hello', (req, res) => {index.hello(req, res)});

  const users = new Users("ken");
  app.get('/user/:id', (req, res) => {users.index(req, res);});

  const comments = new Comments();
  app.get('/api/comments', (req, res) => {comments.index(req, res)});
  app.post('/api/comments', (req, res) => {comments.index(req, res)});

}
