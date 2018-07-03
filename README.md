# LitecoinJS 

**THIS PROJECT IS NOT YET ACTIVE**

LitecoinJS is a javascript-based implementation of various litecoin functions enabling you to natively create litecoin addresses, sign transactions, create transactions, set custom transaction fees, create smart contracts, store data on the litecoin blockchain and much more.

LitecoinJS is designed to work on both regular client applications like browsers and also conventional server applications using NodeJS.

## Don't trust. Verify.

All developers and users of this library are advised to review and verify any underlying code for its validity and suitability. It’s good practice to always verify all cryptography dependencies and the associated codebase with consideration for the potential of backdoors, especially in the form of advanced and hard to spot types like mathematical backdoors.

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
Client side applications can build the browser version of LitecoinJS using [browserify](http://browserify.org), enabling you to use LitecoinJS in the browser, see the guide below - 

#### Create a folder dedicated to LitecoinJS
```
mkdir example_litecoinjs_project
```
```
cd example_litecoinjs_project
```

#### Install LitecoinJS using NPM
```
npm install litecoinjs
```

#### Install browserify globally using NPM
```
npm install -g browserify
```

#### Create an app.js file 
```
touch app.js 
```

#### Open app.js and include LitecoinJS
An example function is used for demonstration purposes.
```
const litecoinjs = require('litecoinjs');

async function createNewAddress(){
    return new Promise(async (resolve, reject) =>{
    try {
        const address_example = await litecoinjs.newAddress(); 
            resolve(address_example); 
    } catch (error){
        reject(`ERROR INSIDE createNewAddress MAIN CATCH BLOCK: ${error}`); 
    }   
    }) 
}

module.exports = {
    yourExampleNameForANewAddress: createNewAddress 
}

```

#### Use browserify to create a browser version of your LitecoinJS project
```
browserify app.js > bundle.js --insert-globals --standalone litecoinjs
```

#### Now you can use LitecoinJS in client browsers
```
<html>
<body> 
<script src="bundle.js"></script>    
    
<script>
async function yourCustomFunction(){
    try {
        const exampleAddressPair = await litecoinjs.yourExampleNameForANewAddress(); 
            console.log(exampleAddressPair); 
    } catch (error){
        console.log(`ERROR INSIDE yourCustomFunction MAIN CATCH BLOCK: ${error}`); 
    }
}

yourCustomFunction(); 
</script>    
</body>
</html>
```




## Examples
All of the following examples are in NodeJS. 

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

How to run the automated tests for LitecoinJS.

### Break down into end to end tests

```
Coming soon
```

## Features

* **Addresses**
	* Generate normal and testnet litecoin addresses.

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
