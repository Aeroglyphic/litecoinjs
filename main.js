/* 
MODULE NAME: main.js 
PURPOSE: Handle primary functions and exports.
DEPENDENCIES: 
    (a) /config.js 
        (a1) Load and set current configuration. 
    (b) /src/address.js
EXPORTS: 
    (a) newAddress()

NOTES: No notes. 
*/ 
const config = require(`${__dirname}/config.js`); 

/* 
###################################################
Set configuration settings 
###################################################
*/ 
config.setGlobalPath(); 









module.exports = {
    newAddress: require(`${__dirname}/src/address.js`)  
}

