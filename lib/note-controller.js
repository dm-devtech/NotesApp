class NoteController {

  constructor(notelist = new Notelist) {
    this.notes = notelist
    this.notes.addNote("Favourite drink: Seltzer")
    this.notelistview = new Notelistview(this.notes.savedNotes)
  };

  view() {
    this.notelistview.allNotes()
  };

  pushToHTML() {
    var changeHTML = document.getElementById("app").innerHTML = this.notelistview.noteList;
    return changeHTML
  };

}

var l = new NoteController()
l.pushToHTML();
