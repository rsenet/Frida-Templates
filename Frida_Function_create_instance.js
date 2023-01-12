Java.perform(function () 
{
    Java.choose("PACKAGE_NAME", 
    {
        onMatch : function(instance)
        { 
                console.log("Found instance: " + instance);

                // Extra Code Goes Here
        },

    onComplete:function(){}
    });    
});