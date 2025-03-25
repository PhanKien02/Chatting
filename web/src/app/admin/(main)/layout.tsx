"use client";

import Sidebar from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={"gap-2 flex justify-between w-full"}>
            <Sidebar />
            <div className="flex-1 z-0 ml-[180px] p-4">{children}</div>
        </div>
    );
}
