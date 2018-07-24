let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill', function(){

  it('should give the total cost of the calls & smses', function(){

      assert.equal(totalPhoneBill("call, sms, call, sms, sms"),"R7.45");
  });
  it('Calculates 1 call (R2.75 per call) and returns the total of R2.75' , function(){
           assert.equal(totalPhoneBill('call'), 'R2.75');

         });
});
