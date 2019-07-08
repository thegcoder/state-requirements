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
    res.render('index', {});
});

router.get('/:type', (req, res) => {
    const type = req.params.type;
    apis.all(type)
        .then((items) => {
            res.render(`${type}/index`, {items});
        })
        .catch((err) => {
            res.send(err);
        });
});

// CREATE
router.get('/create/:type', (req, res) => {
    let type = req.params.type;
    let data = {
        type,
        // Uppercase the first letter of the type
        display: type.charAt(0).toUpperCase() + type.slice(1)
    };
    res.render('create', data);
});

router.post('/:type', (req, res) => {
    const type = req.params.type;
    apis.create(type, req.body)
        .then((data) => {
            res.redirect(`/${type}`);
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
            res.render(`${type}/${object.type}`, object);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/:type/:id/edit', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.read(type, id)
        .then((object) => {
            object.display = object.type.charAt(0).toUpperCase() + object.type.slice(1);
            res.render('update', object);
        })
        .catch((err) => {
            res.send(err);
        });
});

// UPDATE
router.post('/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.update(type, id, req.body)
        .then((data) => {
            res.redirect(`/${type}/${id}`);
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
