import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

export const metadata: Metadata = {
  title: "Brave",
  description: "USA",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
