"use client"

import ChatArea from "@/components/ChatArea";
import Directory from "@/components/directory";

export default function IndexLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <div className='flex flex-1 justify-between'>
                        <div className="flex flex-1 justify-between">
                                <div className="flex-1 max-w-[300px]">
                                        {children}
                                </div>
                                <ChatArea />
                                <Directory />
                        </div>
                </div>
        )
}