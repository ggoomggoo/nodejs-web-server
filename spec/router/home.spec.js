const request = require('supertest');
const should = require('should');

const app = require('../../app');

describe('home api', () => {
    it('GET / should return text', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .then((response) => {
                (response.text).should.be.equal("Hello World");
                done();
            });
    });
});
