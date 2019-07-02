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
const studentApi = require('../models/student.js')
const studentApi = require('../models/student.js')

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const studentRouter = express.Router()

/* Step 4
 *
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
studentRouter.get('/', (req, res) => {
  studentApi.getStudents()
    .then((shops) => {
      res.render('students/students', {students})
    })
    .catch((err) => {
      res.send(err)
    })
})

studentRouter.post('/', (req, res) => {
  studentApi.addStudent(req.body)
    .then(() => {
      res.redirect('/students')
    })
    .catch((err) => {
      res.send(err)
    })
})

studentRouter.get('/new', (req, res) => {
  res.render('students/newStudentForm')
})

studentRouter.get('/:studentId/edit', (req, res) => {
  studentApi.getStudent(req.params.studentId)
    .then((student) => {
      res.render('students/editStudentForm', {student})
    })
})

studentRouter.get('/:studentId', (req, res) => {
  studentApi.getStudent(req.params.studentId)
    .then((student) => {
      studentApi.getStudentByStateId(student._id)
        .then((food) => {
          res.render('students/singleStudent', {student, state})
        })
    })
})

studentRouter.put('/:studentId', (req, res) => {
  studentApi.updateStudent(req.params.studentId, req.body)
    .then(() => {
      res.redirect('/students')
    })
})

studentRouter.delete('/:studentId', (req, res) => {
  studentApi.deleteStudent(req.params.studentId)
    .then(() => {
      res.redirect('/students')
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
