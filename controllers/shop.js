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
const foodApi = require('../models/food.js')

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
      res.render('shops/shops', {shops})
    })
    .catch((err) => {
      res.send(err)
    })
})

shopRouter.post('/', (req, res) => {
  shopApi.addShop(req.body)
    .then(() => {
      res.redirect('/shops')
    })
    .catch((err) => {
      res.send(err)
    })
})

shopRouter.get('/new', (req, res) => {
  res.render('shops/newShopForm')
})

shopRouter.get('/:shopId/edit', (req, res) => {
  shopApi.getShop(req.params.shopId)
    .then((shop) => {
      res.render('shops/editShopForm', {shop})
    })
})

shopRouter.get('/:shopId', (req, res) => {
  shopApi.getShop(req.params.shopId)
    .then((shop) => {
      foodApi.getFoodByShopId(shop._id)
        .then((food) => {
          res.render('shops/singleShop', {shop, food})
        })
    })
})

shopRouter.put('/:shopId', (req, res) => {
  shopApi.updateShop(req.params.shopId, req.body)
    .then(() => {
      res.redirect('/shops')
    })
})

shopRouter.delete('/:shopId', (req, res) => {
  shopApi.deleteShop(req.params.shopId)
    .then(() => {
      res.redirect('/shops')
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
