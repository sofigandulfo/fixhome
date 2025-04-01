import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FixHome - Control de Plagas",
  description: "Eliminamos plagas de forma segura y efectiva en San Luis. Protegé tu hogar o negocio con nuestros servicios certificados de fumigación y control de plagas.",
  icons: {
    icon: "/favicon.ico", // Para navegadores estándar
    shortcut: "/favicon.ico", // Para algunos navegadores antiguos
    apple: "/apple-touch-icon.png", // Para dispositivos Apple (opcional)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
