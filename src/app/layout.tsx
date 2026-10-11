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
      <body className="min-h-full flex flex-col">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex-1 flex flex-col min-h-screen w-full">
              <Header />
              
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
            {children} </main>
            </div>
            

                      
            
            
            <Toaster />
          </ThemeProvider>
          
          
          </body>
    </html>
  );
}
