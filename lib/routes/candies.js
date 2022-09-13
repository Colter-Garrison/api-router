const candies = [
  { name: 'butterfingers', taste: 'butter' },
  { name: 'snickers', taste: 'candy' },
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
  },
  put(req, res) {
    
  },
  delete(req, res) {
    res.statusCode = 400;
    res.send('CANDY IS NOT FOR YOU!');
    res.end();
  },
};
