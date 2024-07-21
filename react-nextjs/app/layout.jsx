import React from 'react';
import { Nunito } from 'next/font/google';
import './globals.css';
import '../fontawesome';

const openSans = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
