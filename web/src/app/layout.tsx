import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/contexts/auth.context";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
    title: "App",
    description: "My Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={`light ${dmSans.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='light'
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme
                    themes={["light", "dark"]}>
                    <AuthContextProvider>
                        <main className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#4e54c8] to-[#ee9ca7] p-4'>{children}</main>
                    </AuthContextProvider>
                    <Toaster duration={2000} />
                </ThemeProvider>
            </body>
        </html>
    );
}
