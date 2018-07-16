/* 
MODULE NAME: address.js 
PURPOSE: Generate litecoin addresses.
DEPENDENCIES: 
    (a) /lib/core/index.js
EXPORTS: 
    (a) createLitecoinAddressPair()
        (a1) Returns a litecoin address and the associated WIF,
        (a2) Real example of returned address pair below: 
        { address: 'MBeeHGfof2EwNobqyyA5fK6bNRij5CrQAC',
          wif: 'T43wmV2KzF8qmXXvsRGUeBNS1tSFotzy8jCYQHpX1GWUYFzfnXAu' 
        }
    (b) createTestLitecoinAddressPair()
        (b1) Returns a TESTNET litecoin address and the associated WIF,
        (b2) Real example of returned address pair below: 
        { address: 'QXkngBb93AWdckZK5FnHGXgSYaQASLb4qN',
          wif: 'cSL4NZoBexSFZF4pBZQMDWDHAVKtxyeuSR8v2deJLSuipCtHmG3V' 
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
const litecoin_network = litecoinjs.networks.litecoin; 
const keyPair = litecoinjs.ECPair.makeRandom({ network: litecoin_network});
const wif = keyPair.toWIF()
    
const keyPairRaw = litecoinjs.ECPair.fromWIF(wif, litecoin_network);
const pubKey = keyPairRaw.getPublicKeyBuffer(); 

const redeemScript = litecoinjs.script.witnessPubKeyHash.output.encode(litecoinjs.crypto.hash160(pubKey))
const scriptPubKey = litecoinjs.script.scriptHash.output.encode(litecoinjs.crypto.hash160(redeemScript))

const address = litecoinjs.address.fromOutputScript(scriptPubKey, litecoin_network); 
            resolve({
                address: address,
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
const litecoin_network = litecoinjs.networks.testnet; 
const keyPair = litecoinjs.ECPair.makeRandom({ network: litecoin_network});
const wif = keyPair.toWIF(); 
    
const keyPairRaw = litecoinjs.ECPair.fromWIF(wif, litecoin_network);
const pubKey = keyPairRaw.getPublicKeyBuffer(); 

const redeemScript = litecoinjs.script.witnessPubKeyHash.output.encode(litecoinjs.crypto.hash160(pubKey)); 
const scriptPubKey = litecoinjs.script.scriptHash.output.encode(litecoinjs.crypto.hash160(redeemScript)); 

let address = litecoinjs.address.fromOutputScript(scriptPubKey, litecoin_network); 
// Convert address to current SegWit encoding standard 
address = litecoinjs.address.toBase58Check(litecoinjs.address.fromBase58Check(address)['hash'], 58);         
            resolve({
                address: address,
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