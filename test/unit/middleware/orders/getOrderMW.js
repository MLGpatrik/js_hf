var expect = require('chai').expect;
var getOrderMW = require('../../../../middleware/orders/getOrderMW');

describe('getOrderMW middleware ', function () {

  it('should return one specific order to res.locals.order', function (done) {
    const mw = getOrderMW();
    const localsMock={
      locals: {
        orders:
           [
           {id:"10",name:"Krisz"},
           {id:"11",name:"Jani"},
           {id:"12",name:"Nari"}
           ],        
        
      }
    }
    reqMock={
      params:{
        id:"12"
      }
    }
    mw(reqMock,
      localsMock
      ,()=>{
        expect(localsMock.locals.order).to.be.eql({id:"12",name:"Nari"});
        done();
    })

  });


  it("res.locals.order should be undefined", function (done) {
    const mw = getOrderMW();
    const localsMock={
      locals: {
        orders:
           [
           {id:"10",name:"Krisz"},
           {id:"11",name:"Jani"},
           {id:"12",name:"Nari"}
           ],        
        
      }
    }
    reqMock={
      params:{
        id:"19"
      }
    }
    mw(reqMock,
      localsMock
      ,()=>{
        expect(localsMock.locals.order).to.be.eql(undefined);
        done();
    })

  });

  it("Should call next with error param", function (done) {
    const mw = getOrderMW();
    const localsMock={
      locals: {
        orders:
           [
           {id:"10",name:"Krisz"},
           {id:"11",name:"Jani"},
           {id:"12",name:"Nari"}
           ],        
        
      }
    }
    reqMock={
      params:{
      }
    }
    mw(reqMock,
      localsMock
      ,(error)=>{
        expect(localsMock.locals.order).to.be.eql(undefined);
        expect(error).to.be.instanceOf(Error);
        done();
    })

  });

});