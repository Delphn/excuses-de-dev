const mongoose = require('mongoose');
const Excuse = require('../models/excuse-model');
const connectionString = 'mongodb://mongo:27017';

mongoose.connect(connectionString, { dbName: 'excusesdb', useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

// seed the database with json data only if the excuses collection is empty
Excuse.countDocuments('Excuses', async (err, count) => {
  if (err) {
    console.error("error", err);
    } else {
      if (count === 0) {
          try {
            // get excuses from json file
            const excusesSeed = require('../seed/excuses.json');
            const exucsesMessage = excusesSeed['excuses-messages'];
            // check if excuses array is empty
            if (exucsesMessage.length === 0 || exucsesMessage === undefined)  {
              return
            }
            await Excuse.insertMany(exucsesMessage);
          } catch (e) {
            console.error("error: ", e);
          }
      }
    }
}).catch((e) => {
  console.error('error', e.message);
})

const documentsInExcusesCollection = async () => {
  const count = await Excuse.countDocuments();
  return count;
}

// seed the database with json data only if the excuses collection is empty
console.log('Connected to the databases: ', documentsInExcusesCollection);

module.exports = db;