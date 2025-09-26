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
    <section className="w-[320px] border-r border-gray-100 bg-white flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-semibold text-lg flex gap-2 items-center">
          Messages <Badge>12</Badge>
        </div>
        <button className="bg-blue-50 rounded-full p-2">
          <Plus className="w-4 h-4 text-blue-500" />
        </button>
      </div>
      <div className="px-6 pb-4">
        <input
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
          placeholder="Search messages"
        />
      </div>
      <div className="flex-1 overflow-y-auto px-2">
        {messages.map((msg, i) => (
          <MessageItem key={i} {...msg} />
        ))}
      </div>
    </section>
  );
}