import type { Metadata } from "next";

import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import {  Toaster } from "@/components/ui/toast";
import Header from "@/components/ui/Header";



export const metadata: Metadata = {
  title: "next-note",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-full flex flex-col"><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            
            <div><Header/></div>

                      
            
            
            <Toaster />
          </ThemeProvider>
          
          
          </body>
    </html>
  );
}
