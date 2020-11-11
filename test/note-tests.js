// note-tests.js

(function testNotesExist(exports) {
  var note = new Note("My favourite language is JavaScript");

    function test() { console.log("prints");};
  assert.isTrue(note.savednote === "My favourite language is JavaScript");

  exports.test = test
})(this);

(function testNotesReturn() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.returnNote() === "My favourite language is JavaScript");
})();

// testNotesExist();
// testNotesReturn()
