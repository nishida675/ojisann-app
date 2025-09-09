"use client";

import { useState, useEffect } from "react";
import { ojisanConvert } from "./components/func";

// 構造化データ（FAQ）
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "おじさん構文ツールとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "入力した普通の文章を、おじさんLINE風の文体（絵文字・独特の定型句を追加）に変換する無料ツールです。",
      },
    },
    {
      "@type": "Question",
      name: "無料で使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、無料でご利用いただけます。広告や会員登録なしで試せます。",
      },
    },
    {
      "@type": "Question",
      name: "変換した文章はどこに保存されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "変換結果はユーザーのブラウザ上でのみ扱われ、サーバーには保存されません（ローカルコピーはクリップボードに保存可能）。",
      },
    },
    {
      "@type": "Question",
      name: "おじさん構文メーカーって何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "入力した文章を自動でおじ構文に変換する無料ツールです。LINEやSNS用に作れます。",
      },
    },
  ],
};

export default function Page() {
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
      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-black/60 min-h-screen w-full flex flex-col items-center justify-start px-4">
        <main className="text-center w-full max-w-6xl py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">おじさん構文メーカー</h1>
            <p className="mt-2 text-lg text-gray-300">
             このおじさん構文メーカーを使えば、入力した文章を簡単におじさん構文に変換できます。おじさん構文としてLINEやSNSにそのまま貼れる文章が作れます。
            </p>
          </header>

          {/* 使い方 */}
          <section aria-labelledby="howto" className="mb-8 text-center">
            <h2 id="howto" className="text-2xl font-semibold mb-4">
              使い方
            </h2>
            <ol className="list-decimal space-y-2 inline-block text-left">
              <li>テキストを入力する</li>
              <li>自動でおじさん構文に変換される</li>
              <li>コピーしてLINEやSNSに貼り付ける</li>
            </ol>
          </section>

          {/* 変換ツール本体 */}
          <section
            aria-labelledby="tool"
            className="bg-gray-700/40 rounded-2xl p-6 mb-8 shadow-lg"
          >
            <h2 id="tool" className="text-2xl font-semibold mb-4">
              変換
            </h2>

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
                  placeholder="ここに変換結果が表示されます"
                  readOnly
                />
                <button
                  onClick={handleCopy}
                  className={`absolute top-2 right-2 px-3 py-1 text-xs rounded text-white transition ${
                    copied ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {copied ? "✔ コピーしました" : "コピー"}
                </button>
              </div>
            </div>
          </section>

          {/* 変換例 */}
          <section
            aria-labelledby="examples"
            className="bg-gray-700/40 rounded-2xl p-6 mb-8 shadow-lg"
          >
            <h2 id="examples" className="text-2xl font-semibold mb-4">
              変換例
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="p-4 border rounded bg-gray-800/50">
                <h3 className="font-medium">入力</h3>
                <pre className="whitespace-pre-wrap">明日ごはん行かない？</pre>
              </article>

              <article className="p-4 border rounded bg-gray-800/50">
                <h3 className="font-medium">変換結果</h3>
                <pre className="whitespace-pre-wrap">
                  ボク😅昨日も仕事でバタバタだったんだ💦 明日ごはん行かないｶﾅ？
                </pre>
              </article>
            </div>
          </section>

          {/* FAQ */}
          <section
            aria-labelledby="faq"
            className="bg-gray-700/40 rounded-2xl p-6 mb-12 shadow-lg text-left"
          >
            <h2 id="faq" className="text-2xl font-semibold mb-4">
              よくある質問（FAQ）
            </h2>

            <details className="mb-3">
              <summary className="cursor-pointer font-medium">
                データは保存されますか？
              </summary>
              <p className="mt-2 text-gray-200">
                いいえ。入力・変換データはブラウザ側で処理され、サーバーには送信しません。
              </p>
            </details>

            <details className="mb-3">
              <summary className="cursor-pointer font-medium">
                商用利用はできますか？
              </summary>
              <p className="mt-2 text-gray-200">
                著作権や利用規約に従ってください。現在は個人利用を想定しています。
              </p>
            </details>
          </section>

          <footer className="text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Ojisann App — 「おじさん構文メーカー」
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
