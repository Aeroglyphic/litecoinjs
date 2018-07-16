# Generating litecoin addresses

## Abstract 
> In this library, litecoin addresses consist of two unique parts, the address, and the associated private key. The private key is a unique cryptographic code ("key") that verifies you are the owner of an address, enabling you to spend litecoin from that address.

>  In LitecoinJS, the private key is encoded as a WIF, also known as the Wallet Import Format, this is done to make the private key easier to read without compromising on security or integrity.

## Address formatting 

Since litecoinJS is a segwit-first library, it is considered that all non-segwit functions, including non-segwit addresses, are deprecated. Be aware that this does not necessarily mean these standards or functions are deprecated on the litecoin network. In order to maintain backwards compatability, addresses are P2SH. Currently BECH32 is not supported and there are no plans to support native segwit in this library until more mainstream adoption. 

### Normal network 
| Address        | Type           | Network | Status  |
| :-------------: |:-------------:| :-------------:| :-----:|
| L | Normal (non segwit) | Normal Network | Deprecated |
| 3     | SegWit (old encoding) | Normal Network | Deprecated |
| M     | SegWit | Normal Network | Current |

### Test network 
| Address        | Type           | Network | Status  |
| :-------------: |:-------------:| :-------------:| :-----:|
| m | Normal (non segwit) | Test Network |  Deprecated |
| n | Normal (non segwit) | Test Network |  Deprecated |
| 2 | SegWit (old encoding) | Test Network |  Deprecated |
| Q | SegWit | Test Network |  Current |


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
{ address: 'MBeeHGfof2EwNobqyyA5fK6bNRij5CrQAC',
  wif: 'T43wmV2KzF8qmXXvsRGUeBNS1tSFotzy8jCYQHpX1GWUYFzfnXAu' }
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
{ address: 'QXkngBb93AWdckZK5FnHGXgSYaQASLb4qN',
  wif: 'cSL4NZoBexSFZF4pBZQMDWDHAVKtxyeuSR8v2deJLSuipCtHmG3V' }
```

> Note: litecoin testnet addresses begin with Q. 
