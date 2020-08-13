const _url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const _url1 = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'

const Promise1 = require('bluebird');
const RP = require('request-promise');

/**
 * returns a promise to fetch Bitcoin price
 */
const req1 = () => new Promise((resolve, reject) => resolve(RP(_url1)));
const req2 = () => new Promise((resolve, reject) => resolve(RP(_url)));

const resolveFunction = _message => res => {
  console.log(_message);
  console.log('res: ', res);
  if (res) return JSON.parse(res).bpi;
  throw new Error(_message);
}

const rejectFunction = _err => _message => {
  console.error(_message);
  throw new Error(_message);
}

const func1 = () => req1().then(res => JSON.parse(res)[0]).then(res => res.content)
const func2 = () => req2()
  .then(resolveFunction('Resolve 1'))
  .catch(rejectFunction('Error 1'))
  .then(res => res.USD.rate)
  .catch(rejectFunction('Error 2'));

(async function () {
  // body
  const [res1, res2] = await Promise.all([func1(), func2()]).then(res => res);


})();