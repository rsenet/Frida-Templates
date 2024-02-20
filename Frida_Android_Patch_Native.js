// All capital letters must be replaced

// X86
// Usefull link: https://frida.re/docs/javascript-api/#x86writer
var INSTRUCTION_PTR = Module.getBaseAddress(LIB).add(INSTRUCTION_ADDR - 0x00010000);
Memory.protect(INSTRUCTION_PTR, 0x1000, "rwx");
var WRITER = new X86Writer(INSTRUCTION_ADDRESS);

// ARM64
// Usefull link: https://frida.re/docs/javascript-api/#arm64writer
var INSTRUCTION_PTR = Module.getBaseAddress(LIB).add(INSTRUCTION_ADDR);
Memory.protect(INSTRUCTION_PTR, 0x1000, "rwx");
var WRITER = new Arm64Writer(INSTRUCTION_ADDRESS);

try
{
	// Flush the changes (apply the changes to the memory)
	WRITER.flush();

} 
finally 
{
	// Dispose of the X86Writer to free up resources
  	WRITER.dispose();
}
