'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for ""', function() {
            var response = request('get', 'http://localhost:5000/pet/PET_PETID_GET_200_PETID', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for ""', function() {
            var response = request('get', 'http://localhost:5000/pet/PET_PETID_GET_400_PETID', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for ""', function() {
            var response = request('get', 'http://localhost:5000/pet/PET_PETID_GET_404_PETID', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 405 for ""', function() {
            var response = request('post', 'http://localhost:5000/pet/PET_PETID_POST_405_PETID', { 
                'body': "PET_PETID_POST_405_REQUEST_BODY",
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for ""', function() {
            var response = request('delete', 'http://localhost:5000/pet/PET_PETID_DELETE_400_PETID', { 
                'headers': {"api_key":"pariatur"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});
