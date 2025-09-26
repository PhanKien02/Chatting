/* eslint-disable prettier/prettier */
"use client";
import { Button } from "@/components/ui/button";
import { Phone, Send } from "lucide-react";
import Image from "next/image";

const chat = [
  { sender: "Florencio Dorrance", message: "omg, this is amazing", me: false },
  { sender: "Florencio Dorrance", message: "perfect! ✅", me: false },
  { sender: "Florencio Dorrance", message: "Wow, this is really epic", me: false },
  { sender: "You", message: "How are you?", me: true },

  { sender: "You", message: "woohoooo", me: true },
  { sender: "You", message: "Haha oh man", me: true },
  { sender: "You", message: "Haha that's terrifying 😱", me: true },
  { sender: "Florencio Dorrance", message: "just ideas for next time", me: false },
  { sender: "Florencio Dorrance", message: "I'll be there in 2 mins 🕑", me: false },
  { sender: "You", message: "aww 💚", me: true },
  { sender: "Florencio Dorrance", message: "omg, this is amazing", me: false },
  { sender: "Florencio Dorrance", message: "woohoooo 🔥", me: false },
];

export default function ChatArea() {
  return (
    <section className={`flex-1 flex flex-col h-full
      dark:bg-gray-900 bg-white
    `}>
      <header className={`flex items-center px-8 py-5 border-b
        dark:border-gray-800 border-gray-100
      `}>
        <Image width={100} height={100} src="/avatars/florencio.png" alt="Florencio Dorrance" className="w-10 h-10 rounded-full mr-4" />
        <div className="flex-1">
          <div className={`font-semibold text-base dark:text-white`}>Florencio Dorrance</div>
          <div className="text-xs text-green-500">Online</div>
        </div>
        <Button variant="outline" className="flex gap-2 items-center">
          <Phone className="w-4 h-4" /> Call
        </Button>
      </header>
      <div className="flex-1 px-8 py-6 overflow-y-auto flex flex-col gap-3">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${msg.me ? "justify-end" : "justify-start"}`}
          >
            <Image width={100} height={100}
              src={msg.me ? "/avatars/you.png" : "/avatars/florencio.png"}
              alt={msg.sender}
              className="w-7 h-7 rounded-full"
            />
            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-[60%] shadow
                ${msg.me
                  ?
                  "dark:bg-blue-950 dark:text-blue-300 bg-blue-100 text-blue-700"
                  : "dark:bg-gray-800 dark:text-gray-200 bg-gray-100 text-gray-800"}
              `}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <footer className={`px-8 py-5 flex gap-3
        border-t dark:border-gray-800 dark:bg-gray-900 border-gray-100 bg-white
      `}>
        <input
          className={`flex-1 px-4 py-2 rounded-lg border text-sm
            dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400
              bg-white border-gray-200 text-gray-900
          `}
          placeholder="Type a message"
        />
        <Button className="px-5"><Send /></Button>
      </footer>
    </section>
  );
}