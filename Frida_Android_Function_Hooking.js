Java.perform(function () 
{
    // Name of the class to start hooking.
    var CLASS_REFERENCE = Java.use("package_name.class");

    // Simple implementation
    CLASS_REFERENCE.METHOD_TO_HOOK.implementation = function(args) 
    {
        /*
          OUR OWN IMPLEMENTATION OF THE METHOD
        */
        return false;
    }

    // Simple implementation with overloading
    CLASS_REFERENCE.METHOD_TO_HOOK.overload("java.lang.String", "int").implementation = function(args) 
    {
        /*
          OUR OWN IMPLEMENTATION OF THE METHOD
        */
        return false;
    }

    // Simple implementation of calling static method
    CLASS_REFERENCE.STATIC_METHOD();

    // Simple implementation of changing variable value
    CLASS_REFERENCE.VARIABLE.value = VALUE;
});

