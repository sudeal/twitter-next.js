import type { Metadata } from "next";
import FeedColumnContent from "@/components/FeedColumnContent";
import SearchSidebar from "@/components/SearchSidebar";
import Sidebar from "@/components/Sidebar";
import MobileHeaderAndNav from "@/components/MobileHeaderAndNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twitter Next",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white">
        {/* Masaüstü: sol sidebar */}
        <Sidebar />

        {/* Mobil: üst bar + alt navbar + profil drawer */}
        <MobileHeaderAndNav />

        <main className="main-with-sidebar">
          <section className="feed-column">
            <FeedColumnContent>{children}</FeedColumnContent>
          </section>
          <SearchSidebar />
        </main>
      </body>
    </html>
  );
}
