import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/searchBar/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "IMDb clone webiste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers defaultTheme="system" attribute="class">
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
