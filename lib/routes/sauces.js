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
    sauces.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
  },
  put(req, res) {
    const updatedSauces = sauces[sauces.findIndex((sauce) => sauce.name === req.body.name)];
    updatedSauces.name = req.body.newName;
    res.write(JSON.stringify(sauces));
    res.end();
  },
  delete(req, res) {
    res.statusCode = 400;
    res.send('YOU ARE NOT SAUCY ENOUGH!');
    res.end();
  },
};