// All capital letters must be replaced

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
