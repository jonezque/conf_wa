import React, { useState } from "react";
import { sortWasm } from "./sortWasm";

function generateArray(n = 2 * 1000 * 1000): number[] {
  const arr = new Array(n);

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = Math.random() * 1000;
  }

  return arr;
}

function generateTypedArray(n = 2 * 1000 * 1000): Float64Array {
  const arr = new Float64Array(n);

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = Math.random() * 1000;
  }

  return arr;
}

export const SortArray = () => {
  const [diff1, setDiff1] = useState<number>(0);
  const [diff2, setDiff2] = useState<number>(0);
  const [diff3, setDiff3] = useState<number>(0);

  const sortHandler = () => {
    const arr = generateArray();
    const start = +new Date();
    arr.sort((a, b) => a - b);
    const end = +new Date();
    setDiff1(end - start);
  };

  const sortTypedHandler = () => {
    const arr = generateTypedArray();
    const start = +new Date();
    arr.sort((a, b) => a - b);
    const end = +new Date();
    setDiff2(end - start);
  };
  const sortWasmHandler = async () => {
    const arr = generateTypedArray();
    setDiff3(await sortWasm(arr));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <div>{diff1}</div>
          <button onClick={sortHandler}>Sort it</button>
        </div>
        <div>
          <div>{diff2}</div>
          <button onClick={sortTypedHandler}>Sort it</button>
        </div>
        <div>
          <div>{diff3}</div>
          <button onClick={sortWasmHandler}>Sort it</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column'
        }}
      >
        {!!diff1 && !!diff2 && <div>типизированные массивы быстре обычных в {diff1/diff2} раз</div>}
        {!!diff3 && !!diff2 && <div>wasm массивы быстре типизированных в {diff2/diff3} раз</div>}
        {!!diff1 && !!diff3 && <div>wasm массивы быстре обычных в {diff1/diff3} раз</div>}
      </div>
    </div>
  );
};
