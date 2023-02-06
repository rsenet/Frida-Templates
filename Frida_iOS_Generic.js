if (ObjC.available) 
{
    try
    {
        var className = "";
        var funcName = "";

        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

        Interceptor.attach(hook.implementation, 
        {
            onEnter: function(args) 
            {
                console.log("[+] Class Name: " + className);
                console.log("[+] Method Name: " + funcName); 
            },
            onLeave: function(retval) 
            {
                // Cast to a string if needed - ObjC.Object(retval).toString()
                console.log('Return Value: ' + retval);
            }
        });
    }
    catch(error) 
    {
        console.log("[!] Exception: " + error.message); 
    }
}  
else 
{
    console.log("Objective-C Runtime is not available!"); 
}