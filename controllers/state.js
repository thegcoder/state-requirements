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
const stateApi = require('../models/state.js')
const stateApi = require('../models/state.js')

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const stateRouter = express.Router()

/* Step 4
 *
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
stateRouter.get('/', (req, res) => {
  stateApi.getAllStates()
    .then((state) => {
      res.render('state/state', {state})
    })
    .catch((err) => {
      res.send(err)
    })
})

stateRouter.post('/', (req, res) => {
  stateApi.addState(req.body)
    .then(() => {
      res.redirect('/state')
    })
    .catch((err) => {
      res.send(err)
    })
})

stateRouter.get('/new', (req, res) => {
  res.render('state')
})

stateRouter.get('/:stateId/edit', (req, res) => {
  stateApi.getAllStates(req.params.stateId)
    .then((state) => {
      res.render('stateID/editState', {state})
    })
})

stateRouter.get('/:stateId', (req, res) => {
  stateApi.getAllStates(req.params.stateId)
    .then((state) => {
      stateApi.getAllStatesByStateId(state._id)
        .then((state) => {
          res.render('state/singleState', {state})
        })
    })
})

stateRouter.put('/:stateId', (req, res) => {
  stateApi.updateState(req.params.stateId, req.body)
    .then(() => {
      res.redirect('/state')
    })
})

stateRouter.delete('/:stateId', (req, res) => {
  stateApi.deleteState(req.params.studentId)
    .then(() => {
      res.redirect('/state')
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
