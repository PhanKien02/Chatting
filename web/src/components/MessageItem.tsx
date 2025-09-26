"use client";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

const tagColor: Record<string, string> = {
  Question: "bg-blue-100 text-blue-700",
  "Help wanted": "bg-purple-100 text-purple-700",
  Bug: "bg-red-100 text-red-700",
  Hacktoberfest: "bg-green-100 text-green-700",
  Request: "bg-green-100 text-green-700",
  "Follow up": "bg-blue-100 text-blue-700",
  "Some content": "bg-gray-100 text-gray-700",
};

export default function MessageItem({
  avatar,
  name,
  preview,
  time,
  tags,
  selected,
}: {
  avatar: string;
  name: string;
  preview: string;
  time: string;
  tags: string[];
  selected?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2",
        selected ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
      )}
    >
      <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover" />
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-gray-500">{preview}</div>
        <div className="flex gap-1 mt-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className={clsx(
                "rounded px-2 py-0.5 text-xs",
                tagColor[tag] || "bg-gray-100 text-gray-700"
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  );
}