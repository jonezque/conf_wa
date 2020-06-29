
declare const Module: any;

export const sortWasm = async (arr: Int32Array | Float64Array): Promise<number> => {
    const module = await Module();
    const func = arr instanceof Int32Array ? 'sortIntArray' : 'sortArray';
    const sortArray = module.cwrap(func, "number", ["number", "number"]);

    const bytesPerElement = arr.BYTES_PER_ELEMENT;
    const nBytes = arr.length * bytesPerElement;
    const arrayPointer = module._malloc(nBytes);

    const dataHeap = new Uint8Array(module.HEAPU8.buffer, arrayPointer, nBytes);
    dataHeap.set(new Uint8Array(arr.buffer));

    const diff = sortArray(arrayPointer, arr.length);

    //const result = new T(dataHeap.buffer, dataHeap.byteOffset, arr.length);
    module._free(arrayPointer);

    return diff;
  };