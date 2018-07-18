const http = require('http');
const port = 3000


const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
})
.listen(port, () => {
  console.log(`A mágica ta rolando na porta ${port}`);
});
