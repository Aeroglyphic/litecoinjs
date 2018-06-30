/* 
MODULE NAME: config.js 
PURPOSE: Provide and set various configurations.
DEPENDENCIES: No dependencies. 
EXPORTS: 
    (a) setGlobalPath
NOTES: No notes. 
*/ 


/* 
Set the global directory path by hooking into global namespace.  
*/ 
function setGlobalPath (){
    return global.__basedir = __dirname;
};


module.exports = {
    setGlobalPath: setGlobalPath
}
