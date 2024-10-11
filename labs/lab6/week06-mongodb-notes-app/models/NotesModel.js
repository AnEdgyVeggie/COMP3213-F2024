const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
    },
    noteDescription: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        validate: (value) => { 
            if (value.toUpperCase() !== "HIGH" 
            && value.toUpperCase() !== "MEDIUM" 
            && value.toUpperCase() !== "LOW")
           { throw new Error("Value needs to be High, Low or Medium") }
        },
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true,
    },
    dateUpdated: {
        type: Date
    }
});

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note;