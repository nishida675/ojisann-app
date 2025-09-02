import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "おじさん構文変換ツール | Ojisann App",
  description: "文章を一瞬でおじさん構文に変換！🤣 絵文字や定型句を散りばめて、おじさんLINE風の文章を簡単に作れます。",
  keywords: ["おじさん構文", "文章変換", "ネタツール", "LINE", "変換アプリ"],
  openGraph: {
    title: "おじさん構文変換ツール",
    description: "一瞬で文章をおじさんLINE風に変換！",
    siteName: "Ojisann App",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "おじさん構文変換ツール",
    description: "文章を一瞬でおじさん構文に変換🤣",
  },
  verification: {
    google: "tDL2ak-Xk9kVjDvckx5upSJLsv2ca6LRSggCFp2-97Q",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}