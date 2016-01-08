import index from "../controllers/main/index-controller";
import Users from "../controllers/main/users-controller";

export default function dispach(app) {

  const users = new Users("ken");
  app.get('/hoge', users.index);
  app.use('/', index);

}
