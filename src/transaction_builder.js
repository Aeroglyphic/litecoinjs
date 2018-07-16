/* 
MODULE NAME: transaction_builder.js 
PURPOSE: Create litecoin transactions.
DEPENDENCIES: 
    (a) /lib/core/index.js
    (b) /src/litoshi.js 
EXPORTS: 
    (a) createTransaction()
    
        
    
NOTES: No notes.
*/ 


const litecoinjs = require('../lib/core/index.js');
const asyncForEach = require('../lib/asyncForEach.js'); 
const addressConversion = require('./transaction_builder/address_conversion.js'); 

/* 
NETWORK: 'normal' or 'testnet'
ADDRESS: The address executing the transaction. 
CHANGE_ADDRESS: Any excess litoshi are sent to this address. Formula: ((unspent_amount - amount) - fee)
WIF: The private key (WIF) of the address executing transaction. 

OUTPUTS: An array, with objects containing the txid and txid_index that will be used to 
finance this new transaction. 

    (a) See the following example; 
    [{
        txid: "2afaabe9208addf4513d93671911f55271da72d679c63c1b269746c75b3a0c46",
        txid_index: 2,
        amount: 15000 // unspent amount for this TXID 
    }]
    (b) The txid_index is the index location on the litecoin blockchain of the output used 
    for the corresponding txid, which is the txid property in this object.

PAYMENT_ADDRESSES: An array, with objects containing the address and amount that will be sent.

    (a) See the following example; 
    [{
        address: MNZnbtzP6CqxUb2EqxRyov1i18NEgpZ5ek, 
        amount: 2500
    },
    {
        address: MNZnbtzP6CqxUb2EqxRyov1i18NEgpZ5ek, 
        amount: 2500
    }]
    
FEE: The amount of litoshi to set as the fee for this transaction. 
*/ 
// (network, address, change_address, wif, outputs, payment_address, fee, unspent_amount, amount)
async function createTransaction(tx_data){
    
/* 
Convert addresses back into older encoding version in order to work with existing codebase. 
Note: This will need to be fixed in the future. 
*/ 
for (let a=0;a<tx_data.payment_addresses.length;a++){
tx_data.payment_addresses[a].address =  await addressConversion(tx_data.payment_addresses[a].address, "normal"); 
}  

    
if (tx_data.network === "normal"){     
tx_data.address = await addressConversion(tx_data.address, "normal"); 
tx_data.change_address = await addressConversion(tx_data.change_address, "normal");

} else if (tx_data.network === "testnet"){
tx_data.address = await addressConversion(tx_data.address, "testnet"); 
tx_data.change_address = await addressConversion(tx_data.change_address, "testnet");

};

    return new Promise(async (resolve, reject) =>{
       try {
// Set litecoin network            
const litecoin_network = (tx_data.network === "normal" ? litecoinjs.networks.litecoin : litecoinjs.networks.testnet);
                 
const keyPair = litecoinjs.ECPair.fromWIF(tx_data.wif, litecoin_network); 
           
var pubKey = keyPair.getPublicKeyBuffer()
var pubKeyHash = litecoinjs.crypto.hash160(pubKey)

var redeemScript = litecoinjs.script.witnessPubKeyHash.output.encode(pubKeyHash); 
var redeemScriptHash = litecoinjs.crypto.hash160(redeemScript); 

var scriptPubKey = litecoinjs.script.scriptHash.output.encode(redeemScriptHash); 

var address = litecoinjs.address.fromOutputScript(scriptPubKey, litecoin_network); 

let txb = new litecoinjs.TransactionBuilder(litecoin_network);     

// Total transaction amount based on outputs used to fund transaction            
let total_tx_amount = 0;      
// Total amount spent based on the tx_data.payment_addresses amount         
let total_payment_amount = 0;         
           
// Create new transaction by adding outputs from other TX.
const tx_output_arr = tx_data.outputs;           
await asyncForEach(tx_output_arr, async (tx_create_input_data) => {
    txb.addInput(tx_create_input_data.txid, tx_create_input_data.txid_index); 
        total_tx_amount += tx_create_input_data.amount; 
}); 
           
// Amount to be paid to payment_address(s)            
//txb.addOutput(tx_data.payment_address, tx_data.amount); 
await asyncForEach(tx_data.payment_addresses, async (payment_data) => {
    txb.addOutput(payment_data.address, payment_data.amount);
        total_payment_amount += payment_data.amount; 
});
           
           
           
// Change return amount (minus the tx fee)
if (((total_tx_amount - total_payment_amount) - tx_data.fee) > 0){
    txb.addOutput(tx_data.change_address, (total_tx_amount - total_payment_amount) - tx_data.fee);  
}           


try {
    
// Sign transaction     
let current_pos = 0;     
    await asyncForEach(tx_data.outputs, async (output_tx) => {
txb.sign(current_pos, keyPair, redeemScript, null, output_tx.amount);
    current_pos++;        
}); 

    
} catch (error){
  reject(`ERROR SIGNING TRANSACTION: ${error}`);
}          
           
const transaction_build = txb.build().toHex();  
   resolve(transaction_build);         
           
    } catch (error){
        reject(`ERROR IN [createTransaction] MAIN CATCH BLOCK: ${error}`); 
        }   
    })
}







module.exports = createTransaction;