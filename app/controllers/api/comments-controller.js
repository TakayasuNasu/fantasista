import fs from "fs";

export default class CommentsController {
  constructor() {

  }

  index(req, res) {
    fs.readFile(`${process.cwd()}/app/mock/comments.json`, (err, data) => {
      if (req.method == 'GET') {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
      } else {
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(`${process.cwd()}/app/mock/comments.json`, JSON.stringify(comments, null, 4), (err) => {
          res.setHeader('Cache-Control', 'no-cache');
          res.json(comments);
        });
      }
    });
  }

}
