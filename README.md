# About Frida Templates

Frida Templates is a collection of templates that make it easy to create Frida scripts.

## Usage

### Frida Android Function setTimeout

This Frida script executes a Java function after a specified delay (MILLISECONDS). This ensures that the Java environment is ready before executing a custom implementation, useful for actions requiring precise timing.

### Frida Android Hooking

This Frida script intercepts and modifies the behaviour of a method in a specific Java class (PACKAGE_NAME.CLASS). It redefines method implementations, including overloads, can call static methods, modify variables, and create/use objects in the class.

### Frida Android Hooking Existing instance

This Frida script searches for instances of a specific Java class (PACKAGE_NAME.CLASS) in an application. Once found, it allows these instances to be logged or manipulated using custom implementations in the onMatch and onComplete functions. 

### Frida Android Native Memory String Scanner

This Frida script scans the memory of a native shared library (LIB_SO) to find a specific byte pattern (PATTERN). When a match is found, it attempts to read a C-style string at the matched address and logs it. It can be used to locate hardcoded flags, secrets, or identifiers in memory. A hexdump of the surrounding memory is also provided for further analysis. The scan process uses Memory.scan with custom onMatch and onComplete callbacks.

### Frida Android Native Call

This Frida script allows to call a specific native function from its address (ADDRESS_NATIVE_FUNCTION). It creates an instance of the native function, specifying its return type and argument types, then invokes it with the necessary arguments.


### Frida Android Native Hooking

This Frida script intercepts the execution of a function exported from a shared library (LIB_SO) using multiple ways. It determines the target address of the function, attaches an interceptor and allows the input arguments and output return value to be modified or logged. 


### Frida Android Native Patch

This Frida script dynamically patches an instruction in a shared library (LIB_SO) for x86 or ARM64. It calculates the address of the target instruction, changes the memory permissions to allow writing and uses a writer (X86 or ARM64) to make the changes. Finally, it applies the changes and releases the associated resources.


### Frida Android Native Search Function Addr

This Frida script is used to dynamically locate the address of a specific function in a shared library (LIB_SO). It scans all the exported functions in the library and searches for a function whose name matches a given pattern (SEARCHED_FUNCTION). Once found, its memory address is stored in a variable (SEARCH_FUNCTION_ADDR) for later manipulation or analysis.


### Frida iOS Generic

Basic template for hooking functions on iOS


## Author

Régis SENET ([rsenet](https://github.com/rsenet))


## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/rsenet/Frida-Templates).

## License

The project is available as open source under the terms of the [GPLv3](https://www.gnu.org/licenses/quick-guide-gplv3.en.html)
