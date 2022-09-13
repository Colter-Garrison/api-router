const sauces = [
  { name: 'ketchup', color: 'red' },
  { name: 'mustard', color: 'yellow' },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.end();
  },
  post(req, res) {

  },
  put(req, res) {

  },
  delete(req, res) {
    res.statusCode = 400;
    res.send('YOU ARE NOT SAUCY ENOUGH!');
    res.end();
  },
};