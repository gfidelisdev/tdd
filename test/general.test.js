const supertest = require("supertest")
const app = require('../src/app')
let request = supertest(app)

describe("Server operation", ()=>{
    it("Should respond on 3131 port",()=>{
        return request.get("/")
            .then(res=>expect(res.statusCode).toEqual(200))
    })
    it("Should return the color blue",()=>{
        return request.get('/color/')
            .then(res=>expect((res.body.color).toLowerCase()).toEqual('blue'))
    })
})