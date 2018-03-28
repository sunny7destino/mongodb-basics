const assert = require("assert");
const marioChar = require("../models/mariochar");

//Describe test
describe('Deleting  Records', function(){

  var char;

  beforeEach(function(done){
    char = new marioChar({
      name: 'Mario'
    });

    char.save().then(function(){
      done();
    });
  });

  //Create tests
  it('Deletes one record from the database', function(done){

     marioChar.findOneAndRemove({ name: 'Mario' }).then(function(){
       marioChar.findOne({ name: 'Mario' }).then(function(result){
         assert(result === null);
         done();
       });
     });

  });

});
