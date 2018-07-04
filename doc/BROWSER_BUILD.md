# Building for browsers

## Considerations 
> LitecoinJS will work with most modern up to date browsers. You should, however, perform your own testing to ensure LitecoinJS is working in your targeted browser environments. 

### Installing with browsers
Client-side applications can build the browser version of LitecoinJS using [browserify](http://browserify.org), enabling you to use LitecoinJS in the browser, see the guide below. 

#### Create a folder dedicated to LitecoinJS
```
mkdir example_litecoinjs_project
```
```
cd example_litecoinjs_project
```

#### Initialise NPM 
```
npm init
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

#### Deploy LitecoinJS in the browser environment
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

You should explore the [browserify](http://browserify.org) documentation for more complex build information. 


