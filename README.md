# litecoinJS 

**THIS PROJECT IS NOT YET ACTIVE**

litecoinJS is a JavaScript-based implementation of various litecoin functions enabling you to natively create litecoin addresses, sign transactions, create transactions, set custom transaction fees, create smart contracts, store data on the litecoin blockchain and much more.

litecoinJS is designed to work on both regular client applications like browsers and also conventional server applications using NodeJS.

## Getting Started

These instructions will get you a copy of litecoinJS up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you are planning to use the NodeJS version of litecoinJS it's advisable that you have the following software and configuration on your machine -

```
Coming soon
```

### Installing

For NodeJS applications you can download the latest version of litecoinJS by running the following command from terminal 
```
npm i litecoinjs
```

Client side applications can download the latest pre-built version of litecoinJS from the following link - 
```
Coming soon
```


### Create a litecoin address 

Create a litecoin address via NodeJS - 
```
const litecoin = require('litecoinjs');

(async () => {
	try {
		const address = await litecoin.newPair(); 
		console.log(address); 
	} catch (error) {
		console.error(`ERROR: ${error}`);
	}
})(); 
```



More info coming soon.

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

Please read [CONTRIBUTING.md](/) for details on our code of conduct, and the process for submitting pull requests to us.

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
