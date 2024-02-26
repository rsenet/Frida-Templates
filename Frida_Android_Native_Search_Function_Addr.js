// All capital letters must be replaced

// Default return value for SEARCH_FUNCTION_ADDR
var SEARCH_FUNCTION_ADDR = 0x0;
 
// Getting all exports out of the libnative-lib.so
var exportedFunctions = Module.enumerateExports(LIB_SO)
 
// Iterating over this array trying to find SEARCHED_FUNCTION
exportedFunctions.forEach(function(element, index)
{
    // Looking for the function that contains SEARCHED_FUNCTION
    if(element.name.includes(SEARCHED_FUNCTION)) 
    {
        console.log("Name = " + element.name);
        console.log("Pointer = " + element.address);

        // Getting the address of the desired function
        SEARCH_FUNCTION_ADDR = element.address;
    }
})
 

// SEARCH_FUNCTION_ADDR can now be used

