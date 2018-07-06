const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../src/components/js/restcall.js').getUser;
const response = require('./response');

describe('Get User - octocat', () => {
  beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/octocat')
      .reply(200, response);
  });
 it('To check the Rest API Call status == 200', () => {
    return getUser('octocat',null)
      .then(response => {
        //expect an object back
        expect(response.status).to.equal(200);
      });
  });
  it('To check the user details object is not null', () => {
    return getUser('octocat',null)
      .then(response => {
        //expect an object back
        expect(typeof response).to.not.equal('null');
      });
  });
  it('To check the user name equal to Octocat', () => {
    return getUser('octocat',null)
      .then(response => {
        //Test result of name for the response
		expect(response.name).to.equal('The Octocat')
      });
  });
    it('To check the company name equal to GitHub', () => {
    return getUser('octocat',null)
      .then(response => {
        //Test result company for the response
		expect(response.company).to.equal('GitHub')
      });
  });
   it('To check the location name equal to San Francisco', () => {
    return getUser('octocat',null)
      .then(response => {
        //Test result location for the response
		// expect(response.location).to.equal('San Francisco')
      });
  });
  it('To Check the user type != null ', () => {
    return getUser('octocat',null)
      .then(response => {
        //Test result of name, company and location for the response
        expect(response.type).to.not.equal('null');
      });
  });
  it('To Check the user type equal to User', () => {
    return getUser('octocat',null)
      .then(response => {
        //Test result of name, company and location for the response
        expect(response.type).to.equal('User')
      });
  });
});