/*
 * Place all functions, classes, and/or DB schemas here for a single
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database.
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */

/* Step 2
 *
 * TODO: create model schema
 * NOTE: skip this if you are not using mongoose
 *
 */
const StateSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 },
 rating: {
   type: Number,
   min: 0,
   max: 5
 },
 category: String,
 description: {
   type: String,
   required: true
 },
 imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const StateCollection = mongoose.model('State', StateSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllStates() {
  return StateCollection.find()
}

function addState(stateObject) {
  return StateCollection.create(stateObject)
}

function getState(stateId) {
  return StateCollection.findByStateId(stateId)
}

function updateState(stateId, stateObject) {
  return StateCollection.findByIdAndUpdate(stateId, state)
}

function deleteState(stateId) {
  return StateCollection.findByIdAndDelete(stateId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllStates,
  addState,
  updateState,
  deleteState
}
