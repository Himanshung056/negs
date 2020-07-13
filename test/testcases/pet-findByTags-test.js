'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/findByTags', function() {
    describe('tests for get', function() {
        it('should respond 200 for ""', function() {
            var response = request('get', 'http://localhost:5000/pet/findByTags', { 
                'qs': {"tags":"PET_FINDBYTAGS_GET_200_TAGS"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for ""', function() {
            var response = request('get', 'http://localhost:5000/pet/findByTags', { 
                'qs': {"tags":"PET_FINDBYTAGS_GET_400_TAGS"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});
