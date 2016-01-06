export default function dispach(app) {

  app.get('/', function(req, res){
    res.send('wrrrry!!!');
  });

  app.get('/api', function(req, res){
    res.send('this is api');
  });
}
