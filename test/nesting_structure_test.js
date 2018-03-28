const assert = require('assert');
const mongoose = require('mongoose');
const author = require('../models/authors');


//Describe tests
describe('Nesting records', function(){


  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });


  //Create test
  it('Create an author with sub-documents', function(done){

    var pat = new author({
      name: 'Patrick',
      age: 34,
      books: [{
        title: 'Name of the Wind',
        pages: 400
      }]
    });

    pat.save().then(function(){
      author.findOne({name:'Patrick'}).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });

  });


  it('Adds a book to an author', function(done){

    var pat = new author({
      name: 'Patrick',
      age: 34,
      books: [{
        title: 'Name of the Wind',
        pages: 400
      }]
    });

    pat.save().then(function(){
      author.findOne({name:'Patrick'}).then(function(record){
        //Add a book to the books array
        record.books.push({title:'Wise Man Fear', pages: 350});
        record.save().then(function(){
          author.findOne({name:'Patrick'}).then(function(result){
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });

  });

});
