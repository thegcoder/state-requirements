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
    students: [StudentSchema]
});

// Requirement schema
const RequirementSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: String,
    states: [StateSchema]
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
function all(type) {
    switch (type) {
        case 'states':
            return States.find({});
            break;
        case 'students':
            return Students.find({});
            break;
        case 'requirements':
            return Requirements.find({});
            break;
        default:
            return {};
    }
}

// Create Operations
function create(type, object) {
    switch (type) {
        case 'states':
            return States.create(object);
            break;
        case 'students':
            return Students.create(object);
            break;
        case 'requirements':
            return Requirements.create(object);
            break;
        default:
            return {};
    }
}

// Read Operations
function read(type, id) {
    switch (type) {
        case 'states':
            return States.findById(id);
            break;
        case 'students':
            return Students.findById(id);
            break;
        case 'requirements':
            return Requirements.findById(id);
            break;
        default:
            return {};
    }
}

// Update Operations
function update(type, id, object) {
    switch (type) {
        case 'states':
            return States.findByIdAndUpdate(id, object);
            break;
        case 'students':
            return Students.findByIdAndUpdate(id, object);
            break;
        case 'requirements':
            return Requirements.findByIdAndUpdate(id, object);
            break;
        default:
            return {};
    }
}

// Delete Operations
function remove(type, id, object) {
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
            return {};
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
