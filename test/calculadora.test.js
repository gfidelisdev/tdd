let app = require('../app')

describe("Basic ops", ()=>{

    it("Should return the value 10 whem operation is 5 + 5", ()=>{
        let result = app.sum(5,5)
        expect(result).toEqual(10)
        
    })
    
    it("Should return 10 when multiplying 2 by 5", ()=>{
        let result = app.times(2,5)
        expect(result).toEqual(10)
    })
})