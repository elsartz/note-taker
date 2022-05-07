const fs = require("fs");
const path = require("path");


const createNote = function (body, notesArray) {

    const note = body;
    notesArray.push(note);    // add note in an array

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;

}

const deleteNote = function (id, totalNotes) {
console.log(id);
    let notes = totalNotes.filter(item => {
        if (item.id == id) {
            return false;
        } else {
            return true; // Return a value that coerces to true to keep the item
        }
    })
    // make new ids
    var i = 0;
    notes.forEach(note => {
        note.id = i;
        i ++;
    })
console.log(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return notes;
}

module.exports = {createNote, deleteNote};