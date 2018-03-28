const assert = require("assert");
const marioChar = require("../models/mariochar");

//Describe test
describe('Finding  Records', function(){

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
  it('Find one record from the database', function(done){

     marioChar.findOne({ name: 'Mario'}).then(function(result){
        assert(result.name === 'Mario');
        done();
     });

  });


  it('Find one record by ID from the database', function(done){

     marioChar.findOne({ _id: char._id }).then(function(result){
        assert(result._id.toString() === char._id.toString());
        done();
     });

  });

});
