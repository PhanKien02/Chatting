/* eslint-disable prettier/prettier */
"use client";
import { Button } from "@/components/ui/button";
import { Settings, Search, MessageSquare, Users, Folder, Trash } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-white h-full rounded-l-3xl flex flex-col items-center py-8 gap-10 shadow">
      <Button variant="ghost" size="icon" className="mb-6">
        <Search className="w-6 h-6 text-blue-500" />
      </Button>
      <nav className="flex flex-col gap-8">
        <Button variant="ghost" size="icon"><MessageSquare className="w-6 h-6" /></Button>
        <Button variant="ghost" size="icon"><Users className="w-6 h-6" /></Button>
        <Button variant="ghost" size="icon"><Folder className="w-6 h-6" /></Button>
        <Button variant="ghost" size="icon"><Trash className="w-6 h-6" /></Button>
      </nav>
      <div className="mt-auto">
        <Button variant="ghost" size="icon"><Settings className="w-6 h-6" /></Button>
      </div>
    </aside>
  );
}