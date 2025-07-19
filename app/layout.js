
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Stylicle Salon</title>
        <meta name="description" content="Discover your own style" />
        <link rel="canonical" href="https://www.stylicle.com/" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Stylicle Salon" />
        <meta property="og:description" content="Discover your own style" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stylicle.com/" />
        <meta property="og:image" content="/public/styliclogo.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stylicle Salon" />
        <meta name="twitter:description" content="Discover your own style" />
        <meta name="twitter:image" content="/public/styliclogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <GoogleAnalytics gaId="G-F8XJRL7KXF" />

        <LanguageProvider>
          {children} 
        </LanguageProvider>
      </body>
    </html>
  );
}
