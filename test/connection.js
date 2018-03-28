const mongoose = require("mongoose");

//ES6 Promises
mongoose.Promise = global.Promise;


//Connect to the db before tests run
before(function(done){
  //Connect to mongoDB
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once("open", function(){
    console.log("Connection has been made..");
    done();
  }).on("error", function(){
    console.log("Connection Error...");
  });
});


//Drop the collection before each test
beforeEach(function(done){
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
