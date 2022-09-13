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

  },
  put(req, res) {
    
  },
  delete(req, res) {
    res.statusCode = 400;
    res.send('CANDY IS NOT FOR YOU!');
    res.end();
  },
};
