/* 
IGNORE THIS FILE
*/ 


const litecoin = require('./main.js'); 

async function bar(){
    const foo = await litecoin.newAddress(); 
        console.log(foo);
    
}

setInterval(async function(){
    await bar();
       
}, 1);