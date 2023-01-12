Java.perform(function () 
{
    // Name of the class to start hooking.
    var MainActivity = Java.use("com.example.name.classname");

    // Simple implementation
    MainActivity.function_name.implementation = function() 
    {
        // write the modified function code here
        return false;
    }

    // Simple implementation with overloading
    MainActivity.function_name.overload("java.lang.String", "java.lang.String").implementation = function() 
    {
        // write the modified function code here
        return false;
    }    
});