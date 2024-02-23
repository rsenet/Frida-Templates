// All capital letters must be replaced

Java.perform(function () 
{
    // Name of the class to start hooking.
    var CLASS_REFERENCE = Java.use("PACKAGE_NAME.CLASS");

    // Simple implementation
    CLASS_REFERENCE.METHOD_TO_HOOK.implementation = function(ARGS) 
    {
        // Call hooked function and save value in a variable
        var MYVAR = this.METHOD_TO_HOOK(ARGS)

        // Make a return
        return false;
    }

    // Simple implementation with overloading
    CLASS_REFERENCE.METHOD_TO_HOOK.overload("java.lang.String", "int").implementation = function(ARGS) 
    {
        // Call hooked function and save value in a variable
        var MYVAR = this.METHOD_TO_HOOK(ARGS)

        // Make a return
        return false;
    }

    // Simple implementation of calling static method
    CLASS_REFERENCE.STATIC_METHOD();

    // Simple implementation of changing variable value
    CLASS_REFERENCE.VARIABLE.value = VALUE;

    // Simple creation and use of a class object
    var CLASS_OBJ = CLASS_REFERENCE.$new();
    CLASS_OBJ.METHOD();
});
