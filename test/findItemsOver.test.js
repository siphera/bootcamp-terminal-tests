let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){
    it('should print items over the threshold amount of R20' , function(){
      assert.deepEqual(findItemsOver ([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}], 20), [{'name' : 'pears', 'qty' : 37}])
  });

  it('should print items over R20' , function(){
    assert.deepEqual(findItemsOver ([{name : 'apples', qty : 28},
  {name : 'pears', qty : 20}], 20), [{'name' : 'apples', 'qty' : 28}])
  });


});
