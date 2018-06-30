# litecoinJS 

**THIS PROJECT IS NOT YET ACTIVE**

litecoinJS is a javascript-based implementation of various litecoin functions enabling you to natively create litecoin addresses, sign transactions, create transactions, set custom transaction fees, create smart contracts, store data on the litecoin blockchain and much more.

litecoinJS is designed to work on both regular client applications like browsers and also conventional server applications using NodeJS.

## Getting Started

These instructions will get you a copy of litecoinJS up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you are planning to use the NodeJS version of litecoinJS it's advisable that you have the following software and configuration on your machine -

```
NodeJS 8 or higher 
```

### Installing with NodeJS

For NodeJS applications you can download the latest version of litecoinJS by running the following command from terminal - 
```
npm install litecoinjs
```


### Installing with browsers
Client side applications can build the browser version of litecoinJS using [browserify](http://browserify.org), enabling you to use litecoinJS in the browser, see the guide below - 

#### Create a folder dedicated to litecoinJS
```
mkdir example_litecoinjs_project
```
```
cd example_litecoinjs_project
```

#### Install litecoinJS using NPM
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

#### Open app.js and include litecoinJS
An example function is used for demonstration purposes.
```
const litecoinjs = require ('litecoinjs');

async function createNewAddress (){
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

#### Use browserify to create a browser version of your litecoinJS project
```
browserify app.js > bundle.js --insert-globals --standalone litecoinjs
```

#### Now you can use litecoinJS in client browsers
```
<html>
<body> 
<script src="bundle.js"></script>    
    
<script>
async function yourCustomFunction(){
    try {
        const exampleAddress = await litecoinjs.yourExampleNameForANewAddress(); 
            console.log(exampleAddress); 
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
    const address = await litecoinjs.newAddress(); 
        console.log(address); 
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

### Example two is coming soon 

Coming soon. 


## Running the tests

How to run the automated tests for litecoinJS.

### Break down into end to end tests

```
Coming soon
```

## Features


```
Coming soon
```

## Deployment

Additional notes about how to deploy this on a live system coming soon.

## Built With

* [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Initially derrived from the BitcoinJS codebase.


## Contributing

Please read [CONTRIBUTING.md](https://gitlab.com/backcopy/litecoinjs/blob/master/doc/CONTRIBUTING.md) for details on the litecoinJS code of conduct, and the process for submitting pull & merge requests to litecoinJS. 

## Versioning

```
Coming soon
```

## Authors

```
Coming soon
```


## License

litecoinJS is licensed under the [MIT license](https://gitlab.com/backcopy/litecoinjs/raw/master/LICENSE).

## Acknowledgments

```
Coming soon
```
