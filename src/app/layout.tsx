import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "VFX",
    description: "Attempt at a VFX button",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-gray-900 text-white"}>{children}</body>
        </html>
    );
}