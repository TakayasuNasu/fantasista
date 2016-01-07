import index from "../controllers/main/index-controller";

export default function dispach(app) {

  app.use('/', index);

}
