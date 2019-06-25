/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const shopApi = require('../models/shop.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const shopRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
shopRouter.get('/', (req, res) => {
  shopApi.getShops()
    .then((shops) => {
      res.send(shops)
    })
    .catch((err) => {
      res.send(err)
    })
})

shopRouter.post('/', (req, res) => {
  shopApi.addShop(req.body)
    .then(() => {
      res.send('Shop created')
    })
    .catch((err) => {
      res.send(err)
    })
})

shopRouter.get('/new', (req, res) => {
  res.send('This is a new shop form')
})

shopRouter.get('/:shopId/edit', (req, res) => {
  shopApi.getShop(req.params.shopId)
    .then((shop) => {
      res.send('This is an edit form')
    })
})

shopRouter.get('/:shopId', (req, res) => {
  shopApi.getShop(req.params.shopId)
    .then((shop) => {
      res.send(shop)
    })
})

shopRouter.put('/:shopId', (req, res) => {
  shopApi.updateShop(req.params.shopId, req.body)
    .then(() => {
      res.send('Shop updated')
    })
})

shopRouter.delete('/:shopId', (req, res) => {
  shopApi.deleteShop(req.params.shopId)
    .then(() => {
      res.send('Shop deleted')
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  shopRouter
}
