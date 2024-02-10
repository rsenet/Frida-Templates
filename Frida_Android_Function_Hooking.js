Java.perform(function () 
{
    // Name of the class to start hooking.
    var class_reference = Java.use("package_name.class");

    // Simple implementation
    class_reference.method_to_hook.implementation = function(args) 
    {
        /*
          OUR OWN IMPLEMENTATION OF THE METHOD
        */
        return false;
    }

    // Simple implementation with overloading
    class_reference.method_to_hook.overload("java.lang.String", "java.lang.String").implementation = function(args) 
    {
        /*
          OUR OWN IMPLEMENTATION OF THE METHOD
        */
        return false;
    }    
});