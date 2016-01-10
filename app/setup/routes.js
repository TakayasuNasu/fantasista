import Index from "../controllers/main/index-controller";
import Users from "../controllers/main/users-controller";

export default function dispach(app) {

  const index = new Index();
  app.get('/', (req, res) => {index.index(req, res)});
  app.get('/hello', (req, res) => {index.hello(req, res)});

  const users = new Users("ken");
  app.get('/user/:id', (req, res) => {
    users.index(req, res);
  });

}
