let assert = require("assert");
let greet = require("../greet");

describe('greet', function(){

    it('should greet Jack correctly', function(){
        assert.equal( greet('Jack'),'Hello, Jack');
    });
    it('should greet Janine correctly', function(){
        assert.equal('Hello, Janine', greet('Janine'));
    });
});
