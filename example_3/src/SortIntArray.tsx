import React, { useState } from "react"
import { sortWasm } from "./sortWasm"

function generateArray(n = 2 * 1000 * 1000): number[] {
  const arr = new Array(n)

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = Math.floor(Math.random() * 1000)
  }

  return arr
}

function generateTypedArray(n = 2 * 1000 * 1000): Int32Array {
  const arr = new Int32Array(n)

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = Math.floor(Math.random() * 1000)
  }

  return arr
}

export const SortIntArray = () => {
  const [diff1, setDiff1] = useState<number>(0)
  const [diff2, setDiff2] = useState<number>(0)
  const [diff3, setDiff3] = useState<number>(0)

  const sortHandler = () => {
    const arr = generateArray()
    const start = +new Date()
    arr.sort((a, b) => a - b)
    const end = +new Date()
    setDiff1(end - start)
  }

  const sortTypedHandler = () => {
    const arr = generateTypedArray()
    const start = +new Date()
    arr.sort((a, b) => a - b)
    const end = +new Date()
    setDiff2(end - start)
  }

  const sortWasmHandler = async () => {
    const arr = generateTypedArray()
    const start = +new Date()
    setDiff3(await sortWasm(arr))
    const end = +new Date()
    console.log("with re-allocating", end - start)
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
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
          flexDirection: "column"
        }}
      >
        {!!diff1 && !!diff2 && (
          <div>
            typed arrays faster than usual{" "}
            {Math.round((diff1 / diff2) * 1000) / 1000} times
          </div>
        )}
        {!!diff3 && !!diff2 && (
          <div>
            wasm arrays faster than typed{" "}
            {Math.round((diff2 / diff3) * 1000) / 1000} times
          </div>
        )}
        {!!diff1 && !!diff3 && (
          <div>
            wasm arrays faster than usual{" "}
            {Math.round((diff1 / diff3) * 1000) / 1000} times
          </div>
        )}
      </div>
    </div>
  )
}
