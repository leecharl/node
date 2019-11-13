const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', (req, res) => { 

    let vals = result(req);
    res.render('pages/math.ejs', vals);
    
  })
  .get('/math_service', (req, res) => {
    let vals = result(req);
    res.writeHead(200, { 'content-type': 'application/json'})
    res.write(JSON.stringify(vals));
    res.end();
    console.log(vals);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  function result(req) {
    let op = req.query.operator;
    let op1 = parseInt(req.query.op1);
    let op2 = parseInt(req.query.op2);
    let result = 0;

    switch (op) {
      case 'add':
        result = op1 + op2;
        op = '+'
        break;
      case 'subtract':
        result = op1 - op2;
        op = '-'
        break;
      case 'multiply':
        result = op1 * op2;
        op = 'x';
        break;
      case 'divide':
        result = op1 / op2;
        op = '&divide;';
        break;
    }
    return { operator: op, op1: op1, op2: op2, result: result };
  }