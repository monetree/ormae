const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors())
app.use(bodyParser.json());

const db = knex({
  client: 'pg',
  connection: {
    host : process.env.POSTGRES_HOST,
    user : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,
    database : process.env.POSTGRES_DB
  }
});


app.listen(process.env.PORT || 3000, ()=> {
  console.log(`App is running on port ${process.env.PORT}`);
})
