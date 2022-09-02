const mongoose = require('mongoose');
const Excuses = require('../models/excuse-model');
const connectionString = 'mongodb://mongo:27017';

mongoose.connect(connectionString, { dbName: 'excusesdb', useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});


const db = mongoose.connection;

// seed the database with json data only if the excuses collection is empty
if (Excuses.count() === 0) {
  db.once('open', async () => {
    try {
      // get excuses from json file
      const excusesSeed = require('../seed/excuses.json');
      const exucsesMessage = excusesSeed['excuses-messages']
      // check if excuses array is empty
      if (exucsesMessage.length === 0 || exucsesMessage === undefined)  {
        return
      }
      await Excuses.insertMany(exucsesMessage);
    } catch (e) {
      console.error(e);
    }
  });
}


module.exports = db;