import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Next 13",
  description: "I am learning next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-100 container mx-auto p-4 max-w-3xl`}
      >
        {children}
      </body>
    </html>
  );
}
