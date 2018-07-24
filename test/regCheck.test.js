let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck', function(){

    it('should return true if its Gauteng registration number', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
    it('should return false if its Limpopo registration number', function(){

      assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });

});
