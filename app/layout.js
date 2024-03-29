import "./globals.css";
import { Noto_Sans_Mono } from "next/font/google";
import Nav from "@/components/Navbar/nav";

const noto = Noto_Sans_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto.className} md:flex w-screen min-h-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
