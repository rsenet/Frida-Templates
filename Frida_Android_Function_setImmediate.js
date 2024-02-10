setImmediate(function()
{
    Java.perform(function() 
    { 
        var currentApplication = Java.use("package_name.class").currentApplication();
        var context = currentApplication.getApplicationContext();  

        /*
          OUR OWN IMPLEMENTATION OF THE METHOD
        */
    });
});