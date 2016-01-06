import dispach from './routes';

export default function setup(app) {
  app.set('port', (process.env.PORT || 3000));
  dispach(app);
}
