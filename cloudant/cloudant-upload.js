
const fs = require("fs");
const Cloudant = require('@cloudant/cloudant');
require("dotenv-json")();

// configure cloudant
const cloudantConfig = {
  account: process.env.username,
  password: process.env.password
}

const dbName = 'conference';
const dataFilePath = 'conference-data.json';

// connect to cloudant
const cloudant = Cloudant(cloudantConfig,  function (error) {
  if (error) {
    throw error;
  }
});

// delete any existing database
// create new database
// load the json data from file into cloudant
cloudant.db.destroy(dbName, function () {
  console.log(`Destroyed database ${dbName}`);
  cloudant.db.create(dbName, function () {
    console.log(`Created database ${dbName}`);
    const conferenceDb = cloudant.use(dbName);

    // load the database json 
    console.log(`Reading file ${dataFilePath}`);
    var data = []
    fs.readFile(dataFilePath, function (error, data) {
      if (error) {
        throw error;
      }

      conferenceDb.bulk({ docs: JSON.parse(data) }, function (error) {
        if (error) {
          throw error;
        }
        console.log(`Finished inserting file ${dataFilePath} into database ${dbName}.`)
      });
    });
  });
});





