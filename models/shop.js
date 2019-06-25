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
const ShopSchema = new mongoose.Schema({
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
const ShopCollection = mongoose.model('Shop', ShopSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getShops() {
  return ShopCollection.find()
}

function addShop(shopObject) {
  return ShopCollection.create(shopObject)
}

function getShop(shopId) {
  return ShopCollection.findById(shopId)
}

function updateShop(shopId, shopObject) {
  return ShopCollection.findByIdAndUpdate(shopId, shopObject)
}

function deleteShop(shopId) {
  return ShopCollection.findByIdAndDelete(shopId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getShops,
  addShop,
  getShop,
  updateShop,
  deleteShop
}
