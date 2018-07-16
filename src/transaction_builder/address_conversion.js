/* 
MODULE NAME: address_conversion.js 
PURPOSE: Convert addresses back into deprecated formatting. 
DEPENDENCIES: 
    (a) /lib/core/index.js
EXPORTS: 
    (a) addressConversion()
    
NOTES: 
    (a) This function is required in order for current standard addresses 
    to work properly with the rest of the codebase. This will likely need
    to be removed at some point and the bitcoinjs-lib codebase re-adjusted
    or updated to the new address encoding standard.
*/

const litecoinjs = require('../../lib/core/index.js');


function addressConversion(address, address_type){
    return new Promise((resolve, reject) =>{
      try {
if (address_type === "normal"){
    const address_return = litecoinjs.address.toBase58Check(litecoinjs.address.fromBase58Check(address)['hash'], 50);
        resolve(address_return);
} else if (address_type === "testnet"){
    const address_return = litecoinjs.address.toBase58Check(litecoinjs.address.fromBase58Check(address)['hash'], 196);
        resolve(address_return); 
} else {
    reject("Invalid address_type specified in [addressConversion] function"); 
}          
      } catch (error){
          reject(`ERROR IN [addressConversion] MAIN CATCH BLOCK: ${error}`); 
      }  
    })
}; 


module.exports = addressConversion; 