// All capital letters must be replaced

var NATIVE_ADD = new NativePointer(ADDRESS_NATIVE_FUNCTION);
const NATIVE_FUNC = new NativeFunction(NATIVE_ADD, 'RETURN_TYPE', ['ARGUMENT_RETURN_TYPE']);
NATIVE_FUNC(ARGUMENTS);