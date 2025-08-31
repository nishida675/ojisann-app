"use client";

import { useState, useEffect } from "react";
import { ojisanConvert } from "./components/func";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setOutput(ojisanConvert(input));
  }, [input]);

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center">
      <div className="bg-black/60 min-h-screen w-full flex flex-col items-center justify-start px-4">
        <main className="text-center w-full max-w-6xl py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-8">
            おじさん構文変換
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {/* 入力欄 */}
            <div className="flex flex-col w-full max-w-md">
              <label className="mb-2 font-semibold">入力テキスト</label>
              <textarea
                className="w-full h-80 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-gray-50 focus:ring-blue-500 text-black"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, 5000))}
                placeholder="ここに文章を入力してください"
                maxLength={5000}
              />
              <span className="text-sm text-gray-300 mt-1 text-right">
                {input.length} / 5000
              </span>
            </div>

            {/* 出力欄 */}
            <div className="flex flex-col w-full max-w-md relative">
              <label className="mb-2 font-semibold">変換結果</label>
              <textarea
                className="w-full h-80 p-4 border rounded-lg shadow-sm bg-gray-50 text-black"
                value={output}
                readOnly
              />
              {/* コピー小ボタン */}
              <button
                onClick={handleCopy}
                className={`absolute top-2 right-2 px-2 py-1 text-xs rounded bg-blue-600 text-white transition ${
                  copied ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {copied ? "コピーしました！" : "コピー"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
