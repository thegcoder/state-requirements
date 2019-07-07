/* Import the mongoose module
 *
 */
const mongoose = require('mongoose');

/* The Mongo URI that we're connecting with
 *
 * TODO: replace <db-name> with the name of your mongo database.
 * This will need to change for every new project you create.
 *
 */
const connectionString = "mongodb://localhost/state-requirements";


/* Open up a connection to the mongo database.
 *
 * NOTE: newUrlParser diables a deprecation warning
 */
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


/* Export the mongoose object.
 *
 * This will allow us to use the same connection to our DB
 * across our different controllers.
 *
 */
module.exports = mongoose
