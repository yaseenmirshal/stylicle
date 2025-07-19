
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./Context/LanguageContext";// Corrected the path to LanguageContext

import { GoogleAnalytics } from "@next/third-parties/google";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Adjust the path as per your project structure
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Adjust the path as per your project structure
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Stylicle Salon",
  description: "Discover your own style",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<<<<<<< HEAD
=======
        <GoogleAnalytics gaId="G-F8XJRL7KXF" />


>>>>>>> 0df47b6 (Added Google Analytics tracking code)
        {/* Wrap children with LanguageProvider */}
        <LanguageProvider>
          {children} 
        </LanguageProvider>
      </body>
    </html>
  );
}
