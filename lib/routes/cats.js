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

  },
  put(req, res) {

  },
  delete(req, res) {
    res.statusCode = 400;
    res.send('HANDS OF THESE CATZ!');
    res.end();
  },
};
