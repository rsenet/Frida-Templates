// All capital letters must be replaced

// Choose only one method to get your target address
var TARGET_ADDRESS = Module.enumerateExports(LIB_SO);
var TARGET_ADDRESS = Module.getExportByName(LIB_SO, FUNC_NAME);
var TARGET_ADDRESS = Module.findExportByName(LIB_SO, FUNC_NAME);
var TARGET_ADDRESS = Module.enumerateImports(LIB_SO);

Interceptor.attach(TARGET_ADDRESS, 
{
    onEnter: function (args) 
    {
        console.log('Entering function');
        /*
            MODIFY OR LOG ARGUMENTS

            Read X argument as ASCII
            var argX = Memory.readCString(args[X]);
            
            Read X argument as UTF-8
            var argX = Memory.readUtf8String(args[X]);

            Read X argument as UTF-16
            var argX = Memory.readUtf16String(args[X]);

            Read X argument as ANSI
            var argX = Memory.readAnsiString(args[X]);
        */
    },

    onLeave: function (retval) 
    {
        console.log('Leaving function');
        /*
            MODIFY OR LOG RETURN VALUE
        */
    }
});
