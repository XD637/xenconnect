"use client";

import "./globals.css";
import { XenConnectProvider } from "@/components/XenConnectProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <XenConnectProvider projectId="6d265c3d6947690ba8372a55d61a8005" appName="XenConnect">
          {children}
        </XenConnectProvider>
      </body>
    </html>
  );
}
