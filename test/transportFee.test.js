let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee', function(){

  it('should be R20 if you work morning shift', function(){
      assert.equal(transportFee("morning"),"R20");
  });

  it('should be R10 if you work afternoon shift', function(){
      assert.equal(transportFee("afternoon"),"R10");
  });

  it('should be free if you work any other shifts', function(){

        assert.equal(transportFee("nightshift"),"free");
    });

});
