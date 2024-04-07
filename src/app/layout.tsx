import type { Metadata } from "next";
import "./globals.css";
import "../ui/dashboard/css/satoshi.css";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";

const satoshi = localFont({
  display: "swap",
  variable: "--font-satoshi",
  src: [
    {
      path: "../ui/dashboard/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../ui/dashboard/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../ui/dashboard/fonts/Satoshi-Regular.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../ui/dashboard/fonts/Satoshi-Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Triptuner Admin Panel",
  description: "Triptuner Admin Panel",
  icons: {
    icon: "../../public/triptuner.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        {children}
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
