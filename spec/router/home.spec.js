const request = require('supertest');
const should = require('should');

const index = require('../../index');

describe('home api', () => {
    it('GET / should return text', (done) => {
        request(index)
            .get('/')
            .expect(200)
            .then((response) => {
                (response.text).should.be.equal("Hello World");
                done();
            });
    });
});
