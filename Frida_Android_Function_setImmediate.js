setImmediate(function()
{
    Java.perform(function() 
    { 
        var currentApplication = Java.use("android.app.ActivityThread").currentApplication();
        var context = currentApplication.getApplicationContext();  

        // Extra Code Goes Here
    });
});