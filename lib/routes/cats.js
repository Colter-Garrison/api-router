const cats = [
  { name: 'Momo', cat: true },
  { name: 'Stu', cat: true },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
  },
  put(req, res) {
    const updatedCats = cats[cats.findIndex((cat) => cat.name === req.body.name)];
    updatedCats.name = req.body.newName;
    res.write(JSON.stringify(cats));
    res.end();
  },
  delete(req, res) {
    cats.pop();
    res.statusCode = 200;
    res.end();
  },
};
