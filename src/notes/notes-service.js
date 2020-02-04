//manage database interactions for notes
const NotesService = {
  getAllNotes(knex) {
    return knex.select("*").from("notes");
  },
  insertNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into("notes")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },
  getNoteById(knex, noteId) {
    return knex
      .select("*")
      .from("notes")
      .where("note_id", noteId)
      .first(); //get note itself
  },
  deleteNote(knex, noteId) {
    return knex("notes")
      .where("note_id", noteId)
      .delete();
  },
  updateNote(knex, noteId, updatedNote) {
    return knex("notes")
      .where("note_id", noteId)
      .update(updatedNote);
  },
};

module.exports = NotesService;
