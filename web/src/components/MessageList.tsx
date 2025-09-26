/* eslint-disable prettier/prettier */
"use client";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import MessageItem from "./MessageItem";
const messages = [
  {
    avatar: "/avatars/elmer.png",
    name: "Elmer Laverty",
    preview: "Haha oh man",
    time: "12m",
    tags: ["Question", "Help wanted"],
    selected: false,
  },
  {
    avatar: "/avatars/florencio.png",
    name: "Florencio Dorrance",
    preview: "woohoooo",
    time: "24m",
    tags: ["Some content"],
    selected: true,
  },
  {
    avatar: "/avatars/lavern.png",
    name: "Lavern Laboy",
    preview: "Haha that's terrifying 😱",
    time: "1h",
    tags: ["Bug", "Hacktoberfest"],
    selected: false,
  },
  {
    avatar: "/avatars/titus.png",
    name: "Titus Kitamura",
    preview: "omg, this is amazing",
    time: "5h",
    tags: ["Question", "Some content"],
    selected: false,
  },
  {
    avatar: "/avatars/geoffrey.png",
    name: "Geoffrey Mott",
    preview: "aww 💚",
    time: "2d",
    tags: ["Request"],
    selected: false,
  },
  {
    avatar: "/avatars/alfonso.png",
    name: "Alfonso Schuessler",
    preview: "perfect!",
    time: "1m",
    tags: ["Follow up"],
    selected: false,
  },
];

export default function MessageList() {
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
        {messages.map((msg, i) => (
          <MessageItem theme={"light"} key={i} {...msg} />
        ))}
      </div>
    </section >
  );
}