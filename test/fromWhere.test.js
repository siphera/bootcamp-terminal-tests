let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' ,function(){

  it('should return "Bellville" if the registration number starts Wwith CY', function(){
      assert.equal(fromWhere("CY 9879"),"Bellville");
  });

  it('should return "Paarl" if registration number startsWith (CJ)', function(){
      assert.equal(fromWhere("CJ 9796"),"Paarl");
  });
  it('should return "Cape Town" if registration number startsWith (CA)', function(){
      assert.equal(fromWhere("CA 7865"),"Cape Town");
  });

  it('should return "Some other place!"" its from any other place', function(){

        assert.equal(fromWhere("anything else"),"Some other place!");
    });

});
