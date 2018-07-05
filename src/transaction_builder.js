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

/* 
ADDRESS: The address executing the transaction. 
WIF: The private key (WIF) of the address executing transaction. 
OUTPUTS: An array, with objects containing the txid and txid_index that will be used to 
finance this new transaction. 

    (a) See the following example; 
    [{
        txid: "2afaabe9208addf4513d93671911f55271da72d679c63c1b269746c75b3a0c46",
        txid_index: 2 
    }]
    (b) The txid_index is the index location on the litecoin blockchain of the output used 
    for the corresponding txid, which is the txid property in this object.
    
AMOUNT: The amount of litoshi to transfer to the PAYMENT_ADDRESS

FEE: The amount of litoshi to set as the fee for this transaction. 
UNSPENT_AMOUNT: The total amount of litoshi in this transaction (from outputs used)
PAYMENT_ADDRESS: The payment address to use for this transaction. 
CHANGE_ADDRESS: Any excess litoshi are sent to this address. Formula: ((unspent_amount - amount) - fee) 
*/ 
function createTransaction(network, address, change_address, wif, outputs, payment_address, fee, unspent_amount, amount){
    return new Promise(async (resolve, reject) =>{
       try {
const litecoin_network = (network === "normal" ? litecoinjs.networks.litecoin : litecoinjs.networks.testnet);
const wif_raw = litecoinjs.ECPair.fromWIF(wif, litecoin_network); 
           
let txb = new litecoinjs.TransactionBuilder(litecoin_network);     

txb.setVersion(2);
           
await asyncForEach(outputs, async (tx_data) => {
    txb.addInput(tx_data.txid, tx_data.txid_index); 
}); 
           
// Amount to be paid to payment_address            
txb.addOutput(payment_address, amount); 
           
// Change return amount (minus the tx fee)
txb.addOutput(change_address, ((unspent_amount - amount) - fee)); 
           
try {
  txb.sign(0, wif_raw);   
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