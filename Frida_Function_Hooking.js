Java.perform(function () {
    // Name of the class to start hooking.
    var MainActivity = Java.use("com.example.name.classname");
    MainActivity.function_name.implementation = function() {
    // write the modified function code here
    return false;
}
    console.log("function simply returned.")
});