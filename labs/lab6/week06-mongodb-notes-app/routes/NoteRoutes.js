const noteModel = require('../models/NotesModel.js');
const express = require('express')
const router = express.Router()

// Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    const reqbody = req.body
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

        try {
            const dateCreated = new Date().toLocaleDateString()


            const noteObject = {
                noteTitle: reqbody.noteTitle,
                noteDescription: reqbody.noteDescription,
                priority: reqbody.priority,
                content: reqbody.content,
                dateAdded: dateCreated,
                dateUpdated: null
            }
            // const note = noteModel.create(noteObject) // can also call the create function
            let note = noteModel()
            note.noteTitle = reqbody.noteTitle,
            note.noteDescription = reqbody.noteDescription,
            note.priority = reqbody.priority,
            note.content = reqbody.content,
            note.dateAdded = dateCreated,
            note.dateUpdated = null
            note.save()

            return res.json(noteObject)
        } catch {
            return res.status(500).send({
                message: "Internal server error"
            });
        }
});

// Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const notes = await noteModel.find()
        return res.send(notes)
    } catch {
        return res.status(400).send({
            message: "Internal server error"
        });
    }
});

// Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const id = req.params['noteId'];
        const note = await noteModel.findById(id);
        
        if (note === null) { 
            return res.status(404).send({ message: "No note found by the provided ID"}) 
        }
        
        return res.json(note)

    } catch {
        return res.status(400).send({
            message: "Internal server error"
        });
    }
});

// Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const id = req.params['noteId'];
        const updateDate = new Date().toLocaleDateString()

        let updateData = req.body
        updateData['dateUpdated'] = updateDate

        const note = await noteModel.findByIdAndUpdate(id, 
            updateData
        )

        return res.json(updateData)
    } catch {
        return res.status(400).send({
            message: "Internal server error"
        });
    }
});

// Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const id = req.params['noteId'];
        const note = await noteModel.findByIdAndDelete(id);

        return res.json({
            message: `User with id: ${id} has been deleted successfully`
        })

    } catch {
        return res.status(400).send({
            message: "Internal server error"
        });
    }
});

module.exports = router
