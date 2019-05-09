require('dotenv').config();
const server = require('./api/server.js');

server.listen(process.env.PORT, () => {
  console.log(`\n*** Server Running on ${process.env.PORT} ***\n`);
});
