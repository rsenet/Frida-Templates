// All capital letters must be replaced

// X86 //
// REAL_INSTRUCTION_ADDR = INSTRUCTION_ADDR (Ghidra) - SEGMENT_START_ADDR (by default: 0x00010000)
var INSTRUCTION_PTR = Module.getBaseAddress(LIB_SO).add(REAL_INSTRUCTION_ADDR);

// Patch Memory Protection with Read Write and eXecute permissions
Memory.protect(INSTRUCTION_PTR, 0x1000, "rwx");
var WRITER = new X86Writer(INSTRUCTION_PTR);
// END X86 //


// ARM64 //
// REAL_INSTRUCTION_ADDR = INSTRUCTION_ADDR (Ghidra) - SEGMENT_START_ADDR (by default: 0x00010000)
var INSTRUCTION_PTR = Module.getBaseAddress(LIB_SO).add(REAL_INSTRUCTION_ADDR);

// Patch Memory Protection with Read Write and eXecute permissions
Memory.protect(INSTRUCTION_PTR, 0x1000, "rwx");
var WRITER = new Arm64Writer(INSTRUCTION_PTR);
// END ARM64 //

try
{
	/* Usefull links
		X86   - Usefull link: https://frida.re/docs/javascript-api/#x86writer
		ARM64 - Usefull link: https://frida.re/docs/javascript-api/#arm64writer
	*/

	// Flush the changes (apply the changes to the memory)
	WRITER.flush();

} 
finally 
{
	// Dispose of the X86Writer to free up resources
  	WRITER.dispose();
}
