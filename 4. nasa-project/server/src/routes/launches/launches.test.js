const request = require('supertest');
const app = require('../../app')

describe('Test GET /launches', () => {
    test('should response with 200 OK', async() => {
        await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200)
     })
})


describe('Test POST /launches', () => {
    const launcheData = {
        mission: "Fly to Silvia Ranti",
        rocket: "RMN FLY1",
        target: "Silvia Ranti",
        launchDate: "January, 20 2030"
    }

    const launcheDataNoDate = {
        mission: "Fly to Silvia Ranti",
        rocket: "RMN FLY1",
        target: "Silvia Ranti"
    }

    const launcheDataInvalidDate = {
        mission: "Fly to Silvia Ranti",
        rocket: "RMN FLY1",
        target: "Silvia Ranti",
        launchDate: "hello"
    }

    test('should response with 201 created', async() => {
        const response = await request(app)
        .post('/launches')
        .send(launcheData)
        .expect('Content-Type', /json/)
        .expect(201)

        // console.log(response)

        const requestDate = new Date(launcheData.launchDate).valueOf()
        const responseDate = new Date(response._body.launchDate).valueOf()

        expect(responseDate).toBe(requestDate)
        expect(response.body).toMatchObject(launcheDataNoDate)

    })

    test('Should catch misssing required properties', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launcheDataNoDate)
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: 'Missing required launch property'
        })
    })

    test('Should catch invalid date type', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launcheDataInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: 'Invalid format date'
        })
    })
});