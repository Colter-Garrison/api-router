import chalk from 'chalk';
import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';

const routes = {
  cats,
  candies,
  sauces,
};

const serverLog = (...args) => console.log(chalk.magenta('[server]'), ...args);

export default function (req, res) {
  const httpMethod = req.method.toLowerCase();
  serverLog('Method:', httpMethod);

  const urlSegments = req.url.split('/');
  serverLog('URL segments:', urlSegments);

  const resourcePath = urlSegments[urlSegments.length - 1];
  serverLog('Resource path:', resourcePath);

  const resource = routes[resourcePath];
  serverLog('resource:', resource);

  const handler = resource[httpMethod];
  serverLog('handler:', handler);

  handler(req, res);
}
