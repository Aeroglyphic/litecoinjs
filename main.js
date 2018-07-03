/* 
MODULE NAME: main.js 
PURPOSE: Handle primary functions and exports.
DEPENDENCIES: 
    (a) /config.js 
        (a1) Load and set current configuration. 
    (b) /src/address.js
        (b1) Normal and testnet address functions.
EXPORTS: 
    (a) newAddress()
    (b) newTestAddress() 
NOTES: No notes. 
*/ 
const config = require(`./config.js`); 

/* 
###################################################
Set configuration settings 
###################################################
*/ 








/* 
###################################################
Export litecoinJS functions 
###################################################
*/ 
module.exports = {
    newAddress: require(`./src/address.js`).createLitecoinAddressPair,
    newTestAddress: require(`./src/address.js`).createTestLitecoinAddressPair 
}

