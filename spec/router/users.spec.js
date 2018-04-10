const request = require('supertest');
const should = require('should');

const app = require('../../index');

describe('users api', () => {
    it('GET /users should ...', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .then((response) => {
                (response.body instanceof Array).should.be.equal(true);
                done();
            });
    });
});
