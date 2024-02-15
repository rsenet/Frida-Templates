// All capital letters must be replaced

Interceptor.attach(TARGET_ADDRESS, 
{
    onEnter: function (args) 
    {
        console.log('Entering function');
        /*
            MODIFY OR LOG ARGUMENTS
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
