/* 
TEST MODULE NAME: addresses.js 
PURPOSE: Test address generation functions. 
NOTES: No notes. 
*/ 

const assert = require('assert');
const expect = require('chai').expect
const litecoinjs = require("../main.js");


describe('Generate litecoin addresses', function() {
  describe('newAddress()', function() {
    it('should return a correctly formatted normal network address', async function() {
        const address = await litecoinjs.newAddress(); 
        const test_address = new RegExp('[M][a-km-zA-HJ-NP-Z1-9]{26,33}'); 
        const test_address_result = test_address.test(address.address); 
        
      assert.equal(test_address_result, true);
});

      
it('should return .WIF object property', async function() {
        const address = await litecoinjs.newAddress(); 
      expect(address.wif).to.be.a('string');
});
      
      
it('should return .ADDRESS object property', async function() {
        const address = await litecoinjs.newAddress(); 
      expect(address.address).to.be.a('string');
});        
  });
    
    
    
/* 
TEST NETWORK ADDRESSES 
*/ 
  describe('newTestAddress()', function() {
    it('should return a correctly formatted test network address', async function() {
        const address = await litecoinjs.newTestAddress(); 
        const test_address = new RegExp('[Q][a-km-zA-HJ-NP-Z1-9]{26,33}'); 
        const test_address_result = test_address.test(address.address); 
        
      assert.equal(test_address_result, true);
});

      
it('should return .WIF object property', async function() {
        const address = await litecoinjs.newTestAddress(); 
      expect(address.wif).to.be.a('string');
});
      
      
it('should return .ADDRESS object property', async function() {
        const address = await litecoinjs.newTestAddress(); 
      expect(address.address).to.be.a('string');
});        
  });
});