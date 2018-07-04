# Generating litecoin addresses

## Abstract 
> In this library, litecoin addresses consist of two unique parts, the address, and the associated private key. The private key is a unique cryptographic code ("key") that verifies you are the owner of an address, enabling you to spend litecoin from that address.

>  In LitecoinJS, the private key is encoded as a WIF, also known as the Wallet Import Format, this is done to make the private key easier to read without compromising on security or integrity.

## Creating an address

A new address can be created by asynchronously executing the `newAddress()` function. 

```
const litecoinjs = require('litecoinjs');

async function newAddressExample(){
try {
    const addressPair = await litecoinjs.newAddress();
    const address = addressPair.address; // Example
    const wif = addressPair.wif; // Example 
    
        console.log(addressPair); 
	} catch (error) {
		console.error(`ERROR: ${error}`);
	}
}

newAddressExample(); 
```

This will resolve with a promise containing the address and private key, encoded as a WIF, see below. 

```
{ address: 'LVZuJ9wD49Wdpvp4NpGoUV3d7mBj1MzKq2',
  wif: 'T7ubUPfCot9CHBcJ82eHXL4vpr5sVNsogbQ8GoNNVr1u2onzxNWC' }
```

## Creating a testnet address
You can generate a testnet address just as easily as a normal address by asynchronously executing the `newTestAddress()` function.

```
const litecoinjs = require('litecoinjs');

async function newAddressExample(){
try {
    const addressPair = await litecoinjs.newTestAddress();
    const address = addressPair.address; // Example
    const wif = addressPair.wif; // Example 
    
        console.log(addressPair); 
	} catch (error) {
		console.error(`ERROR: ${error}`);
	}
}

newAddressExample(); 
```

This will resolve with a promise containing the testnet address and private key, encoded as a WIF, see below. 
```
{ address: 'n2ce7iauptE75fcmFVwMaTy4XH76ir3mbn',
  wif: 'cTL4ddS4bfSTLoGYW31PAhmx873RjSbS98H4523UaeUKmDPifDPL' }
```

> Note: litecoin testnet addresses begin with either m or n. 



