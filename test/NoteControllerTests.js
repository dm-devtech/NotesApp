(function() {
  let noteController = new NoteController();

  function canBeInstantiated(){
    assert.isTrue(noteController instanceof NoteController);
  }
  canBeInstantiated();

})(this);


// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);
// console.log(auto instanceof Car);
// // expected output: true
// console.log(auto instanceof Object);
// // expected output: true

// console.log(Object.getOwnPropertyNames(NoteController));

