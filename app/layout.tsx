import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Heart, Home } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { UserHoverCard } from "@/components/user-hover-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          <div className="flex flex-col h-screen relative">
            <div className="sticky bg-background border-b-[1px] border-foreground py-3 w-full text-foreground flex justify-center items-center gap-2">
              <div>Password Manager</div>
              <ModeToggle />
              <Link href="/">
                <Button variant="ghost">
                  <Home />
                </Button>
              </Link>
            </div>
            <div className="grow bg-background overflow-y-scroll">
              {children}
            </div>
            <div className="sticky bg-background w-full flex gap-2 justify-center items-center py-1 border-t-[1px] border-t-foreground">
              Made with <Heart size={16} color="#ff0000" strokeWidth={0.5} /> by <UserHoverCard />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
