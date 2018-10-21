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
     var query = {
       selector: {
         tags: {
           $elemMatch: {
             $regex: "(?i)" + params.track
           }
         }
       },
       fields: ["author", "author_desc", "title", "desc", "date_time", "tags"],
       limit: 3
     }
 
 
     conferenceDb.find(query, function (err, result) {
       if (err) {
         reject(err);
       }
 
       if (result.docs.length < 1) {
         resolve({ 'output': null });
       } else {
         // console.log(result);
         resolve(createOutput(result));
       }
     });
   });
 
 }
 
 function createOutput(result){
     console.log(result);
     let docs = result.docs;
     let output = "<ul>";
     docs.forEach(function(doc){
         output = output + (`<li><b>${doc.author}</b>: ${doc.title}</li><br/>`);
     })
     output = output + "</ul>";
     output = { "output": output, "len": docs.length}
     console.log(output);
     return output;
 }
 