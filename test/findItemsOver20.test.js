let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20' , function(){
    it('should print items over 20,' , function(){
      assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}]), [{'name' : 'pears', 'qty' : 37}]);
    });

    it('should print items over 20' , function(){
      assert.deepEqual(findItemsOver20 ([{name : 'pears', qty : 80},
    {name : 'pears', qty : 10}]), [{'name' : 'pears', 'qty' : 80}]);

});
});
