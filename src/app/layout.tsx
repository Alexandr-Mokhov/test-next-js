import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const cocoSharpTrial = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: "../vendor/fonts/CocoSharp-Regular-trial.otf",
    },
    {
      style: 'normal',
      weight: '900',
      path: "../vendor/fonts/CocoSharp-Bold-trial.otf",
    },
  ]
})

export const metadata: Metadata = {
  title: "BGP AUTO",
  description: "Сайт автосервиса BGP auto. Сar service BGP AUTO. Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cocoSharpTrial.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
