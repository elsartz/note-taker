const router = require('express').Router();

let  notes  = require('../../db/db.json');
console.log(notes);
const createNote = require('../../lib/notes');

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

module.exports = router;