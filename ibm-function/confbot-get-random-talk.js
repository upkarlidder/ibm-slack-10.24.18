/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
const Cloudant = require("@cloudant/cloudant");

function main(params) {
  const cloudant = Cloudant({ account: params.user, password: params.password });
  const conferenceDb = cloudant.use(params.database);

  return new Promise(function (resolve, reject) {
    var randomQuery = {
      selector: {
        _id: {
          $gt: 0
        }
      },
      fields: ["author", "author_desc", "title", "desc", "date_time", "tags"],
      limit: 1,
      skip: getRandom(0, 100)
    };

    conferenceDb.find(randomQuery, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      }

      if (result.docs.length < 1) {
        resolve({ 'output': "No results found." });
      } else {
        console.log(result);
        resolve({ "output": result });
      }
    });
  });

  function getRandom(start, end) {
    return Math.floor(Math.random() * end) + start;
  }

}
