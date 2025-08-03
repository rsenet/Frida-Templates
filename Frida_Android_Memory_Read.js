// All capital letters must be replaced

const lib = Process.getModuleByName(LIB_SO);
console.log("LIB_SO loaded at:", lib.base);

// hexadecimal version of your pattern. Ex: "464c4147" for "FLAG"
const pattern = "PATTERN"; 

Memory.scan(lib.base, lib.size, pattern,
{
    onMatch: function (address, size)
    {
        console.log("[+] Match found at:", address);

        try
        {
            var flagString = address.readCString();
            console.log("[+] Flag:", flagString);
        }
        catch (err)
        {
            console.error("[!] Failed to read string:", err);
        }

        console.log(hexdump(address, { length: 64 }));
    },

    onComplete: function ()
    {
        console.log("[*] Memory scan complete");
    }
});
