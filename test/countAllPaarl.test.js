let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");



describe('countAllPaarl', function(){

    it('should give the sum of Paarl registration numbers  ', function(){

        assert.equal(countAllPaarl("CL 900, CJ 678 , CA 34567, CJ 67890, CJ 7864"),3);
    });
    it('should return 0 if there are no paarl reg numbers' , function(){
           assert.equal(countAllPaarl('CL123, CA123, CY123'), 0);

         });
});
