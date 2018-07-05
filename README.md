# LitecoinJS 

**THIS PROJECT IS NOT YET ACTIVE**

LitecoinJS is a javascript-based implementation of various litecoin functions enabling you to natively create litecoin addresses, sign transactions, create transactions, set custom transaction fees, create smart contracts, store data on the litecoin blockchain and much more.

LitecoinJS is designed to work on both regular client applications like browsers and also conventional server applications using NodeJS.

## Don't trust. Verify.

All developers and users of this library are advised to review and verify any underlying code for its validity and suitability. It’s good practice to always verify all cryptography dependencies and the associated codebase with consideration for the potential of backdoors, especially in the form of advanced and hard to spot types like mathematical backdoors.

## Features

* **Addresses**
	* Generate normal and testnet litecoin addresses.

## Getting Started

These instructions will get you a copy of LitecoinJS up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you are planning to use the NodeJS version of LitecoinJS it's advisable that you have the following software and configuration on your machine -

```
NodeJS 8 or higher 
```

### Installing with NodeJS

For NodeJS applications you can download the latest version of LitecoinJS by running the following command from terminal - 
```
npm install litecoinjs
```


### Installing with browsers
Client side applications can build the browser version of LitecoinJS by the following the [browser build](https://gitlab.com/backcopy/litecoinjs/blob/master/doc/BROWSER_BUILD.md) documentation. Building for browsers enables you to easily use all LitecoinJS functions in the browser. 


## Examples
See a quick demo of various examples below. 

### Create a litecoin address 

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

Once executed, the expected return information would look something like the following - 
```
{ address: 'LVZuJ9wD49Wdpvp4NpGoUV3d7mBj1MzKq2',
  wif: 'T7ubUPfCot9CHBcJ82eHXL4vpr5sVNsogbQ8GoNNVr1u2onzxNWC' }
```

The `Wallet Import Format (WIF)` is an encoded version of the private key associated with the generated address. 

### Complete examples and usage 

* [Addresses](https://gitlab.com/backcopy/litecoinjs/blob/master/doc/examples/ADDRESSES.md) - Generating normal and testnet addresses.

## Running unit tests

You can execute the included automated unit tests by running the following command - 
```
npm test 
```
 
## Deployment & Production

It’s important to note that LitecoinJS is not anywhere near as extensively tested as the BitcoinJS implementation and might considerably vary in the codebase. You should run extensive testing & verification before deploying anything into production.

## Built With

* [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Initially derrived from the BitcoinJS codebase.


## Contributing

Please read [CONTRIBUTING.md](https://gitlab.com/backcopy/litecoinjs/blob/master/doc/CONTRIBUTING.md) for details on the LitecoinJS code of conduct, and the process for submitting pull & merge requests to LitecoinJS. 

## Versioning

No stable release, TBD.

## Authors

* Edin Jusupovic 


## License

LitecoinJS is licensed under the [MIT license](https://gitlab.com/backcopy/litecoinjs/raw/master/LICENSE).

## Acknowledgments

No acknowledgments yet. 
