let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo', function(){

    it('should state how many years ago ', function(){
        assert.equal(yearsAgo(1997), 21);
    });
    it('should return 18 years ago', function(){
        assert.equal(yearsAgo(2000), 18);
    });

});
