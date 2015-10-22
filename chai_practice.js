var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var test = {};
exports.test = test;

test.methods_of_assert_in_chai = function(){
	var hello = 'wishing'
  	var items = { fruits: [ 'mango', 'banana', 'apple' ], flowers: ['rose','lilly','jasmine','lotus'] };
	assert.typeOf(hello, 'string'); 
	assert.typeOf(hello, 'string', 'hello is a string');
	assert.equal(hello, 'wishing', 'hello equal wishing');
	assert.lengthOf(hello, 7, 'hello`s value has a length of 7');
	assert.lengthOf(items.fruits, 3, 'items has 3 types of fruits');
	assert.lengthOf(items.flowers, 4, 'items has 4 types of flowers');
};
test["some more methods in assert"]=function(){
	var number = 5;
	assert.equal(number,5)
	assert.deepEqual(number,5)
	assert.notDeepEqual(number,-5)
};
test["should in chai"]=function(){
	var hello = 'wishing'
  	var items = { fruits: [ 'mango', 'banana', 'apple' ], flowers: ['rose','lilly','jasmine','lotus'] };
	hello.should.be.a('string');
	hello.should.equal('wishing');
	hello.should.have.length(7);
	items.should.have.property('fruits').with.length(3);
};