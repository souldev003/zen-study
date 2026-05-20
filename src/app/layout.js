import "./globals.css";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/provider/NextThemeProvider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZenStudy – Home",
  description: "Find and book your perfect quiet library study room.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
