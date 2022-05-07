const router = require('express').Router();

let  notes  = require('../../db/db.json');
console.log(notes);
const {createNote, deleteNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let saved = notes;
    return  res.json(saved);
   
})

router.post('/notes', (req, res) => {
   
    if (notes) {
        req.body.id = notes.length.toString();
    } else {
        req.body.id = 0;
    }
    let note = createNote(req.body, notes);
   return res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params;
    notes = deleteNote(id, notes);
    res.json(notes);
})

module.exports = router;