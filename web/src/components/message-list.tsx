import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MessageList() {
    const conversations = [
        { name: "Elmer Laverty", lastMessage: "Haha oh man", time: "12m" },
        { name: "Florencio Dorrance", lastMessage: "Wohoooo", time: "24m" },
        { name: "Lavern Laboy", lastMessage: "Hahaha that's terrifying 💀", time: "1h" },
        // Add more conversations
    ];

    return (
        <div className='flex flex-col p-4 space-y-2'>
            <h2 className='text-xl font-bold'>Messages</h2>
            <div className='space-y-2'>
                {conversations.map((conv, index) => (
                    <Card key={index} className='cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
                        <CardContent className='flex items-center space-x-3 p-3'>
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${conv.name}`} alt={conv.name} />
                                <AvatarFallback>
                                    {conv.name
                                        .split(" ")
                                        .map(n => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className='flex-1'>
                                <div className='flex items-center justify-between'>
                                    <span className='font-semibold'>{conv.name}</span>
                                    <span className='text-xs text-gray-500'>{conv.time}</span>
                                </div>
                                <p className='text-sm text-gray-500 truncate'>{conv.lastMessage}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
