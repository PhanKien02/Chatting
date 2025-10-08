/* eslint-disable prettier/prettier */
"use client";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import MessageItem from "./MessageItem";
import { useGetAllRoom } from "@/hooks/queries/useGetAllRoom";
import { useEffect, useState } from "react";


type Message = {
  avatar?: string,
  name: string,
  preview?: string,
  time?: string,
  tags?: string[],
  selected: false,
  id: string,
}

export default function MessageList() {
  const { rooms } = useGetAllRoom({})
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const mes = rooms?.datas.map(e => ({
      name: e.name,
      id: e.id
    })) as Message[]
    setMessages(mes)
  }, [rooms])
  console.log({ messages });

  return (
    <section
      className={`w-[320px] border-r bg-white flex flex-col
          dark:bg-gray-900 dark:border-gray-800 dark:text-white
          border-gray-100 text-gray-900
      `}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-semibold text-lg flex gap-2 items-center">
          Messages <Badge>12</Badge>
        </div>
        <button className="rounded-full p-2
          dark:bg-gray-800 bg-blue-50">
          <Plus className={`w-4 h-4 dark:text-blue-300text-blue-500`} />
        </button>
      </div>
      <div className="px-6 pb-4">
        <input
          className={`w-full px-3 py-2 rounded-lg border text-sm
            dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400
              bg-white border-gray-200 text-gray-900
          `}
          placeholder="Search messages"
        />
      </div>
      <div className="flex-1 overflow-y-auto px-2">
        {messages.length > 0 ? messages.map((msg, i) => (
          <MessageItem theme={"light"} key={i} {...msg} />
        )) : <>
          <p>Trống</p>
        </>}
      </div>
    </section >
  );
}