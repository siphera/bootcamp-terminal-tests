let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('mostProfitableDepartment' , function(){
    it('Prints carpentry which is the department with the most sales' , function(){
      assert.deepEqual(mostProfitableDepartment ([{department : 'carpentry', sales : 16109, day : 'Friday'},
      {department : 'outdoor', sales : 2505, day : 'Tuesday'}]), 'carpentry');

    });

    it('Prints outdoor which is the department with the most sales' , function(){
      assert.deepEqual(mostProfitableDepartment ([{department : 'hardware', sales : 200, day : 'Friday'},
      {department : 'outdoor', sales : 2505, day : 'Tuesday'}]), 'outdoor');

    });


});
