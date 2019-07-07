/* Step 1 import express
 *
 */
const express = require('express');

/* Step 2
 *
 * Import the api files from the models
 *
 *
 */
const apis = require('../models/index.js');

/* Step 3
 *
 * Create a new router.
 */
const router = express.Router();

/* Step 4
 *
 * request handlers
 */

 // ALL
router.get('/', (req, res) => {
    apis.all('states')
        .then((states) => {
            console.log(states);
            res.render('index', {states});
        })
        .catch((err) => {
            res.send(err)
        });
});

router.get('/:type', (req, res) => {
    const type = req.params.type;
    apis.all(type)
        .then((items) => {
            console.log(items);
            res.render(`${type}/index`, {items});
        })
        .catch((err) => {
            res.send(err);
        });
});

// CREATE
router.post('/:type', (req, res) => {
    const type = req.params.type;
    apis.create(type, req.body)
        .then(() => {
            // res.redirect(`/#create`);
            res.send(req.body);
        })
        .catch((err) => {
            res.send(err);
        });
});

// READ
router.get('/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.read(type, id)
        .then((object) => {
            console.log(object);
            res.render(`${type}`, object);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/:type/:id/edit', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.read(type)
        .then((object) => {
            // res.render(`${type}/edit`, {object});
            res.send(object);
        })
        .catch((err) => {
            res.send(err);
        });
});

// UPDATE
router.put('/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.update(type, id, req.body)
        .then(() => {
            res.redirect(`/#update`);
        })
        .catch((err) => {
            res.send(err);
        });
});

// DELETE
router.delete('/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.deleter(type, id)
        .then(() => {
            res.redirect(`/#delete`);
        })
        .catch((err) => {
            res.send(err);
        });
});

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  router
}
