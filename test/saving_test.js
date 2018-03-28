const assert = require("assert");
const marioChar = require("../models/mariochar");

//Describe test
describe('Saving Records', function(){

  //Create tests
  it('Saving a record to database', function(done){

     var char = new marioChar({
       name: 'Mario'
     });

     char.save().then(function(){
       assert(char.isNew === false);
       done();
     });

  });

});
