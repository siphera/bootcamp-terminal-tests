let assert = require("assert");
let countAllFromTown = require("../countAllFromTown")

describe('countAllFromTown', function(){

    it('should show number of registration numbers that are from CapeTown', function(){
//
        assert.equal(countAllFromTown("CL 900,CA 678 ,CA 34567,CJ 67890,CA 7864","CA" ),3);
    });
    it('Count registration numbers from town and returns the total of 1' , function(){
           assert.equal(countAllFromTown("CY 123,CA 123","CA"),1);

         });

});
