Java.perform(function () 
{
    Java.choose("PACKAGE_NAME", 
    {
        // OnMatch gets called with 1 or more arguments once Frida finds a match for your request
        onMatch : function(instance)
        { 
                console.log("Instance found: " + instance);
                console.log("Instance found: " + instance.toString());

                // Extra Code Goes Here
        },
        // onComplete gets called when Frida finished iterating through possible matches
        onComplete:function()
        {

        }
    });
});