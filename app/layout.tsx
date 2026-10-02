import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poker Ledger · 홀덤 성적 기록",
  description: "홀덤 토너먼트 날짜, 바이인, 순위와 수익을 기록하세요.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
