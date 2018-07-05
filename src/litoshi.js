/* 
MODULE NAME: litoshi.js 
PURPOSE: Provide conversion to and from litecoin/litoshi values.
DEPENDENCIES: 
    (a) big.js (NPM MODULE)
EXPORTS: 
    (a) toLitecoin(NUMBER)
    (b) toLitoshi(NUMBER)
NOTES: 
    (a) Credit to https://github.com/dawsbot/satoshi-bitcoin
*/ 

const Big = require('big-js');



// @private
var conversion = 100000000;

// es6 polyfill
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 === 0;
  }
}

// @private
function toNumber(notNum) {
  return Number(notNum);
}


 /**
   * Convert litoshi to litecoin
   * @param {number|string} litoshi Amount of litoshi to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   * @returns {number}
   */
function toLitecoin(litoshi) {
    return new Promise((resolve, reject) =>{
    try {
    //validate arg
    var litoshiType = typeof litoshi;
    if (litoshiType === 'string') {
      litoshi = toNumber(litoshi);
      litoshiType = 'number';
    }
    if (litoshiType !== 'number'){
      throw new TypeError('toLitecoin must be called on a number or string, got ' + litoshiType);
    }
    if (!Number.isInteger(litoshi)) {
      throw new TypeError('toLitecoin must be called on a whole number or string format whole number');
    }

    var biglitoshi = new Big(litoshi);
    const toLitecoin_return = Number(biglitoshi.div(conversion)); 
        resolve(toLitecoin_return); 
        
    } catch (error){
        reject(`ERROR IN [toLitecoin] MAIN CATCH BLOCK: ${error}`);
    }    
}); 
}; 



  /**
   * Convert litecoin to litoshi
   * @param {number|string} litecoin Amount of litecoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
function toLitoshi(litecoin) {
    return new Promise((resolve, reject) =>{
    try {
    //validate arg
    var litecoinType = typeof litecoin;
    if (litecoinType === 'string') {
      litecoin = toNumber(litecoin);
      litecoinType = 'number';
    }
    if (litecoinType !== 'number'){
      throw new TypeError('toLitoshi must be called on a number or string, got ' + litecoinType);
    }

    var biglitecoin = new Big(litecoin);
    const toLitoshi_return = Number(biglitecoin.times(conversion));
        resolve(toLitoshi_return);              
        
    } catch (error){
      reject(`ERROR IN [toLitoshi] MAIN CATCH BLOCK: ${error}`);      
    }
}); 
}; 






module.exports = {
   toLitecoin: toLitecoin, 
   toLitoshi: toLitoshi
}