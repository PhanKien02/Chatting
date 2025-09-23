// import { MessageList } from "@/components/message-list";
import { ChatWindow } from "@/components/chat-window";
import { Directory } from "@/components/directory";
import { MessageList } from "@/components/message-list";

export default function HomePage() {
    return (
        <div className='flex h-[91.8vh] w-full bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200'>
            {/* Left Sidebar */}
            <div className='hidden lg:flex w-72 flex-col border-r border-gray-200 dark:border-gray-800'>
                <MessageList />
            </div>

            {/* Main Chat Window */}
            <div className='flex-1 flex flex-col'>
                <ChatWindow />
            </div>

            {/* Right Sidebar */}
            <div className='hidden xl:flex w-72 flex-col border-l border-gray-200 dark:border-gray-800'>
                <Directory />
            </div>
        </div>
    );
}
