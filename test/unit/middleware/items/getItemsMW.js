var expect = require('chai').expect;
var getItemsMW = require('../../../../middleware/items/getItemsMW');

describe('getItemsMW middleware ', function () {

  it('should return items on res.locals.items', function (done) {
    const mw = getItemsMW({
      ItemModel:{
        find: (p1,cb)=>{
          cb(null,["item1","item2"]);
        }
      }
    });
    const localsMock={
      locals: {
        items:{

        }
      }
    }
    mw({},
      localsMock
      ,()=>{
        expect(localsMock.locals.items).to.be.eql(["item1","item2"]);
        done();
    })

  });

    it('should return error on db error', function (done) {
    const mw = getItemsMW({
      ItemModel:{
        find: (p1,cb)=>{
          cb("error!!",["item1","item2"]);
        }
      }
    });
    const localsMock={
      locals: {
        items:{

        }
      }
    }
    mw({},
      localsMock
      ,(err)=>{
        expect(err).to.be.eql("error!!");
        done();
    })

  });
});