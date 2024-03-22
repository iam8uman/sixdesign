"use client";
import BlogWrapper from "@/components/BlogWrapper";
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <BlogWrapper>
      <div className="flex justify-center w-full items-center ">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="text-white mb-4 text-right">
            <p className="text-xl font-bold">{input}</p>
            <p className="text-lg">{result}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              className="col-span-2 p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={() => handleClick("+")}
            >
              +
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("6")}
            >
              6
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={() => handleClick("-")}
            >
              -
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("9")}
            >
              9
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={() => handleClick("*")}
            >
              &times;
            </button>
            <button
              className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={() => handleClick(".")}
            >
              .
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={clearInput}
            >
              C
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={calculateResult}
            >
              =
            </button>
            <button
              className="p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none"
              onClick={() => handleClick("/")}
            >
              &divide;
            </button>
          </div>
        </div>
      </div>
      <div className="h2 text-5xl text-center font-bold my-6">Calculate what you want!</div>
    </BlogWrapper>
  );
};

export default Calculator;
