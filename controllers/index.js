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
    if (type === 'requirements') {
        data.hasCredits = true;
    }
    res.render('create', data);
});

router.post('/create/:type', (req, res) => {
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
            if (type === 'requirements') {
                object.hasCredits = true;
            }
            res.render(`${type}/${object.type}`, object);
        })
        .catch((err) => {
            res.send(err);
        });
});

// UPDATE
router.get('/update/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.read(type, id)
        .then((object) => {
            object.display = object.type.charAt(0).toUpperCase() + object.type.slice(1);
            if (type === 'requirements') {
                object.hasCredits = true;
            }
            res.render('update', object);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/update/:type/:id', (req, res) => {
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
router.get('/delete/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.read(type, id)
        .then((object) => {
            object.display = object.type.charAt(0).toUpperCase() + object.type.slice(1);
            if (type === 'requirements') {
                object.hasCredits = true;
            }
            res.render('delete', object);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/delete/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = req.params.id;
    apis.deleter(type, id)
        .then((p, r) => {
            res.redirect(`/${type}`);
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
