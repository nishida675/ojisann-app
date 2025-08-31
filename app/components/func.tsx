export function ojisanConvert(text: string): string {
  if (!text) return "";

  let converted = text;

  // 1. 語尾カタカナ化
  converted = converted.replace(
    /([^。！？\n]+)([。！？\n]?)/g,
    (match, p1, p2) => {
      if (p2 === "？") return p1 + "ｶﾅ？";
      else return p1 + "ネ！";
    }
  );

  // 2. 唐突な自分語りを文頭に追加（50%の確率）
  const selfTalks = [
    "おぢさん😎はね〜今日📅🗓お寿司🍣を食べた👄よ〜",
    "ボク😅昨日も仕事でバタバタだったんだ💦",
    "おぢさん🤓最近映画🎬を見たんだよ〜",
  ];
  if (Math.random() < 0.5) {
    const talk = selfTalks[Math.floor(Math.random() * selfTalks.length)];
    converted = talk + " " + converted;
  }

  // 3. 定型フレーズをランダム挿入
  const phrases = [
    "おはよー！チュッ❤",
    "だいすき！❤(ӦｖӦ｡)",
    "ﾏｯﾀｸもう😡",
    "おぢさんのﾊﾞｶﾊﾞｶﾊﾞｶ(´*ω*｀)",
    "今日も一日、がんばろう🤗└( 'ω')┘ムキッ",
    "風邪🍃😷💊になると、おぢさん🤓心配！😕🤔😭",
  ];
  if (Math.random() < 0.6) {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    if (Math.random() < 0.5) {
      converted = phrase + " " + converted;
    } else {
      const words = converted.split(" ");
      const index = Math.floor(Math.random() * words.length);
      words.splice(index, 0, phrase);
      converted = words.join(" ");
    }
  }

  // 4. 下ネタっぽいフレーズを軽く挿入（20%の確率）
  const naughtyPhrases = ["いっしょに🏩🏨🛌いこうよ〜", "デート💑ﾅﾝﾁｬｯﾃ"];
  if (Math.random() < 0.2) {
    const phrase =
      naughtyPhrases[Math.floor(Math.random() * naughtyPhrases.length)];
    converted += " " + phrase;
  }

  // 5. 文中・文末に絵文字を追加
  const emojis = [
    "😎",
    "🤔",
    "😂",
    "😅",
    "❤",
    "❗",
    "🏩",
    "🍣",
    "👄",
    "📅",
    "🎬",
  ];
  const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
  converted = converted
    .split(" ")
    .map((word) => (Math.random() < 0.2 ? word + randomEmoji() : word))
    .join(" ");
  converted += randomEmoji() + randomEmoji();

  // 6. 文末にﾅﾝﾁｬｯﾃをランダム追加
  if (Math.random() < 0.4) converted += " ﾅﾝﾁｬｯﾃ";

  return converted;
}
