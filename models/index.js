const mongoose = require('./connection.js');

/**
 * 1. Schemas
 */

 // Student schema
 const StudentSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
     }
 });

// State schema
const StateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    requirements: [],
    students: []
});

// Requirement schema
const RequirementSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: String
})

/**
 * 2. Collections
 */

// States collection
const States = mongoose.model('States', StateSchema);

// Students collection
const Students = mongoose.model('Students', StudentSchema);

// Requirements collection
const Requirements = mongoose.model('Requirements', RequirementSchema);

/**
 * 3. CRUD
 */

// Get All
async function all(type) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'states':
            data = await States.find({});
            return data;
            break;
        case 'students':
            data = await Students.find({});
            return data;
            break;
        case 'requirements':
            data = await Requirements.find({});
            return data;
            break;
        default:
            return data;
    }
}

// Create Operations
async function create(type, object) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'states':
            data = await States.create(object);
            return data;
            break;
        case 'students':
            data = await Students.create(object);
            return data;
            break;
        case 'requirements':
            data = await Requirements.create(object);
            return data;
            break;
        default:
            return data;
    }
}

// Read Operations
async function read(type, id) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'states':
            data = await States.findById(id);
            return data;
            break;
        case 'students':
            data = await Students.findById(id);
            return data;
            break;
        case 'requirements':
            data = await Requirements.findById(id);
            return data;
            break;
        default:
            return data;
    }
}

// Update Operations
async function update(type, id, object) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'states':
            data = await States.findByIdAndUpdate(id, object);
            return data;
            break;
        case 'students':
            data = await Students.findByIdAndUpdate(id, object);
            return data;
            break;
        case 'requirements':
            data = await Requirements.findByIdAndUpdate(id, object);
            return data;
            break;
        default:
            return data;
    }
}

// Delete Operations
async function remove(type, id, object) {
    let data = Promise.resolve(false);
    switch (type) {
        case 'states':
            return States.findByIdAndDelete(stateId);
            break;
        case 'students':
            return Students.findByIdAndDelete(stateId);
            break;
        case 'requirements':
            return Requirements.findByIdAndDelete(stateId);
            break;
        default:
            return data;
    }
}

/**
 * 4. Export all the functions
 */
 module.exports = {
   all,
   create,
   read,
   update,
   remove
 }