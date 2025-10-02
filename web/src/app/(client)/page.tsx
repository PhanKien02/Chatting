'use client';
/* eslint-disable prettier/prettier */
import MessageList from "@/components/MessageList";
import ChatArea from "@/components/ChatArea";
import Directory from "@/components/Directory";

export default function ChatPage() {
  return (
    <>
      <div className='flex flex-1 justify-between'>
        <MessageList />
        <ChatArea />
        <Directory />
      </div>
    </>

  );

}
