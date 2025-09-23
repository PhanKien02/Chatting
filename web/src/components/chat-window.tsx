"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpIcon } from "lucide-react";

// Message bubble component
function MessageBubble({ content, isSender }: { content: string; isSender: boolean }) {
    const bubbleClasses = isSender ? "bg-blue-600 text-white self-end rounded-br-none" : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 self-start rounded-bl-none";
    return <div className={`p-3 rounded-lg max-w-xs ${bubbleClasses}`}>{content}</div>;
}

export function ChatWindow() {
    const [messages, setMessages] = useState([
        { content: "omg, this is amazing", isSender: false },
        { content: "perfect!", isSender: false },
        { content: "Wow, this is really epic", isSender: false },
        { content: "How are you?", isSender: true },
        { content: "wooohooo", isSender: true },
        { content: "Haha that's terrifying", isSender: true },
        { content: "aww", isSender: false },
        { content: "omg, this is amazing", isSender: false },
        { content: "wooohooo 🔥", isSender: false },
    ]);
    const [input, setInput] = useState("");

    const handleSendMessage = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { content: input, isSender: true }]);
            setInput("");
        }
    };

    return (
        <div className='flex flex-col h-full'>
            {/* Header */}
            <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center space-x-3'>
                    <Avatar>
                        <AvatarImage src='https://i.pravatar.cc/150?u=Florencio Dorrance' alt='Florencio Dorrance' />
                        <AvatarFallback>FD</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className='font-semibold'>Florencio Dorrance</div>
                        <div className='text-sm text-green-500 flex items-center'>
                            <span className='w-2 h-2 rounded-full bg-green-500 mr-1'></span>
                            Online
                        </div>
                    </div>
                </div>
            </div>

            {/* Message Area */}
            <ScrollArea className='flex-1 p-4'>
                <div className='flex flex-col space-y-3'>
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} content={msg.content} isSender={msg.isSender} />
                    ))}
                </div>
            </ScrollArea>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className='p-4 border-t border-gray-200 dark:border-gray-800 flex items-center space-x-2'>
                <Input placeholder='Type a message...' value={input} onChange={e => setInput(e.target.value)} className='flex-1' />
                <Button type='submit' size='icon'>
                    <ArrowUpIcon className='w-4 h-4' />
                </Button>
            </form>
        </div>
    );
}
