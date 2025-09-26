/* eslint-disable prettier/prettier */
import Sidebar from "@/components/Sidebar";

import MessageList from "@/components/MessageList";

import ChatArea from "@/components/ChatArea";

import Directory from "@/components/Directory";



export default function ChatPage() {

  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#4e54c8] to-[#ee9ca7] p-4'>
      <div className='w-full max-w-[1400px] h-[820px] bg-transparent flex rounded-3xl shadow-xl overflow-hidden'>


        <Sidebar />

        <div className='flex flex-col flex-1 bg-white/80'>

          <div className='flex flex-1'>

            <MessageList />

            <ChatArea />

            <Directory />

          </div>

        </div>

      </div>

    </main>

  );

}
