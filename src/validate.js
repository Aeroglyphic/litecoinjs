/* 
MODULE NAME: validate.js 
PURPOSE: Validate object parameters. 
DEPENDENCIES: 
    (a) Upstream function call 
EXPORTS: 
    (a) If validation is passed, nothing. 
    (b) If validation failed, trigger promise rejection. 
    
NOTES: None. 
*/ 


const litecoinjs = require('../lib/core/index.js');
const asyncForEach = require('../lib/asyncForEach.js'); 

function validate(){
    return new Promise(async (resolve, reject) =>{
       try {  
           resolve();
           // TBD 
    } catch (error){
        reject(`ERROR IN [validate] MAIN CATCH BLOCK: ${error}`); 
        }   
    })
}

module.exports = validate; 