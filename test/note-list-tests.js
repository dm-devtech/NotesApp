(function testNotesArrayExists() {
  var note = new Notelist();
  assert.isTrue(Array.isArray(note.savedNotes));
})(this);

(function testNotesArrayLength() {
  var note = new Notelist();
  assert.isTrue(Array.length === 1);
})(this);

(function testOutputNotes() {
  var notelist = new Notelist();
  notelist.addNote("test")
  assert.isTrue(notelist.savedNotes[0] === "test");
})(this);

(function testReturnsAllNotes() {
  var notelist = new Notelist();
  notelist.addNote("test")
  assert.isTrue(notelist.returnNotes() === "test");
})(this);

// testNotesArrayExists();
// testNotesArrayLength();
// testOutputNotes();
// testReturnsAllNotes()
