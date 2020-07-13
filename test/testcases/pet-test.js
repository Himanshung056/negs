'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet', function() {
    describe('tests for put', function() {
        it('should respond 400 for ""', function() {
            var response = request('put', 'http://localhost:5000/pet', { 
                'body': "PET_PUT_400_REQUEST_BODY",
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for ""', function() {
            var response = request('put', 'http://localhost:5000/pet', { 
                'body': "PET_PUT_404_REQUEST_BODY",
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });


        it('should respond 405 for ""', function() {
            var response = request('put', 'http://localhost:5000/pet', { 
                'body': "PET_PUT_405_REQUEST_BODY",
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 405 for ""', function() {
            var response = request('post', 'http://localhost:5000/pet', { 
                'body': "PET_POST_405_REQUEST_BODY",
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
});
