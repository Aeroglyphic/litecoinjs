/* 
MODULE NAME: address.js 
PURPOSE: Generate litecoin addresses.
DEPENDENCIES: 
    (a) /lib/core/index.js
EXPORTS: 
    (a) createLitecoinAddressPair()
        (a1) Returns a litecoin address and the associated WIF,
        (a2) Real example of returned address pair below: 
        { address: 'LgMiEEaxEoo9az57c6rjQUaxv3PBXkSjmH',
          wif: 'T39c2aLJLX7n5cu7XuBWvxwygFySapqBwtkDRhuF9PQoC2RRj1UU' 
        }

    
NOTES: 
    (a) The wallet import format (WIF) is an encoded version of
    the private key. 
*/ 


const litecoinjs = require('../lib/core/index.js');



function createLitecoinAddressPair(){
    return new Promise((resolve, reject) =>{
       try {
        // Set litecoin specific configuration. 
        const bcrypto = litecoinjs.crypto; 
        const litecoin = litecoinjs.networks.litecoin; 
           
         const keyPair = litecoinjs.ECPair.makeRandom({ network: litecoin}); 
         const wif = keyPair.toWIF(); 
         const address_decoded_normal = keyPair.getAddress();    
            resolve({
                address: address_decoded_normal,
                wif: wif
            })     
    } catch (error){
        reject(`ERROR IN [createLitecoinAddressPair] MAIN CATCH BLOCK: ${error}`); 
        }   
    })
}



function createTestLitecoinAddressPair(){
    return new Promise((resolve, reject) =>{
       try {
        // Set litecoin specific configuration. 
        const bcrypto = litecoinjs.crypto; 
        const litecoin = litecoinjs.networks.testnet; 
           
         const keyPair = litecoinjs.ECPair.makeRandom({ network: litecoin}); 
         const wif = keyPair.toWIF(); 
         const address_decoded_normal = keyPair.getAddress();    
            resolve({
                address: address_decoded_normal,
                wif: wif
            })     
    } catch (error){
        reject(`ERROR IN [createTestLitecoinAddressPair] MAIN CATCH BLOCK: ${error}`); 
        }   
    })
}




module.exports = {
   createLitecoinAddressPair: createLitecoinAddressPair,
   createTestLitecoinAddressPair: createTestLitecoinAddressPair
}