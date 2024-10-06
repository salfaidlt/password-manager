import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata: Metadata = {
  title: "My Password Manager",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <div className="bg-background border-b-[1px] border-foreground py-3 w-full text-foreground flex justify-center items-center gap-2">
              <div>Password Manager</div>
              <ModeToggle />
            </div>
            <div className="grow bg-background">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
