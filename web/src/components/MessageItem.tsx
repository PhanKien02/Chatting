/* eslint-disable prettier/prettier */
"use client";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Image from "next/image";

const tagColor: Record<string, string> = {
  Question: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "Help wanted": "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  Bug: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  Hacktoberfest: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  Request: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  "Follow up": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "Some content": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

export default function MessageItem({
  avatar,
  name,
  preview,
  time,
  tags,
  selected,
  theme
}: {
  avatar?: string;
  id: string,
  name: string;
  preview?: string;
  time?: string;
  tags?: string[];
  selected?: boolean;
  theme: "light" | "dark";
}) {
  console.log({ avatar });

  return (
    <div
      className={clsx(
        "flex items-center gap-3 p-3 rounded-xl cursor-pointer mb-2",
        selected
          ? theme === "dark"
            ? "bg-blue-950 border border-blue-800"
            : "bg-blue-50 border border-blue-200"
          : theme === "dark"
            ? "hover:bg-gray-800"
            : "hover:bg-gray-50"
      )}
    >
      <Image width={100} height={100} src={avatar || "https://i.pravatar.cc/150?u=a042581f4e29026704d"} alt={name} className="w-9 h-9 rounded-full object-cover" />
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className={theme === "dark" ? "text-xs text-gray-400" : "text-xs text-gray-500"}>{preview}</div>
        <div className="flex gap-1 mt-1">
          {tags?.length && tags.map((tag) => (
            <Badge
              key={tag}
              className={clsx(
                "rounded px-2 py-0.5 text-xs",
                tagColor[tag] || (theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700")
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className={theme === "dark" ? "text-xs text-gray-500" : "text-xs text-gray-400"}>{time}</div>
    </div>
  );
}