import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "KBRS & Associates — Chartered Accountants",
    description:
        "KBRS & Associates is a full-service Chartered Accountancy firm offering integrated financial, compliance, taxation, and advisory solutions to individuals and businesses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${lora.variable}`}>
                {children}
            </body>
        </html>
    );
}
