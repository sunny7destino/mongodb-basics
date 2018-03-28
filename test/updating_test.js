const assert = require("assert");
const marioChar = require("../models/mariochar");

//Describe test
describe('Updating  Records', function(){

  var char;

  beforeEach(function(done){
    char = new marioChar({
      name: 'Mario',
      weight: 50
    });

    char.save().then(function(){
      done();
    });
  });

  //Create tests
  it('Updates one record from the database', function(done){

     marioChar.findOneAndUpdate({name:'Mario'}, {name:'Sunny'}).then(function(){
       marioChar.findOne({_id:char._id}).then(function(result){
         assert(result.name === 'Sunny');
         done();
       })
     })

  });


  it('Increments the weight by one in the database', function(done){

     marioChar.update({},{ $inc: {weight:1} }).then(function(){
       marioChar.findOne({name:'Mario'}).then(function(record){
         assert(record.weight === 51);
         done();
       })
     })

  });

});
