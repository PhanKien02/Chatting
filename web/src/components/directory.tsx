"use client";
import { Badge } from "@/components/ui/badge";
import { FileText, Image, File } from "lucide-react";

const members = [
  { avatar: "/avatars/florencio.png", name: "Florencio Dorrance", role: "Market Development Manager" },
  { avatar: "/avatars/benny.png", name: "Benny Spanbauer", role: "Area Sales Manager" },
  { avatar: "/avatars/jamel.png", name: "Jamel Eusebio", role: "Administrator" },
  { avatar: "/avatars/lavern.png", name: "Lavern Laboy", role: "Account Executive" },
  { avatar: "/avatars/alfonso.png", name: "Alfonso Schuessler", role: "Proposal Writer" },
  { avatar: "/avatars/daryl.png", name: "Daryl Nehls", role: "Nursing Assistant" },
];

const files = [
  { icon: <FileText className="w-5 h-5 text-pink-400" />, name: "j9.pdf", type: "PDF", size: "9mb" },
  { icon: <Image className="w-5 h-5 text-green-400" />, name: "Screenshot-3817.png", type: "PNG", size: "4mb" },
  { icon: <File className="w-5 h-5 text-blue-400" />, name: "sharefile.docx", type: "DOC", size: "555kb" },
  { icon: <FileText className="w-5 h-5 text-purple-400" />, name: "Jerry-2020_J-9_Form.xxl", type: "XXL", size: "24mb" },
];

export default function Directory() {
  return (
    <aside className="w-[320px] bg-white h-full rounded-r-3xl p-8 shadow flex flex-col gap-8">
      <div>
        <div className="font-semibold text-lg mb-2">Directory</div>
        <div>
          <div className="font-medium mb-2 flex items-center gap-2">
            Team Members <Badge>{members.length}</Badge>
          </div>
          <div className="flex flex-col gap-4">
            {members.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full" />
                <div>
                  <div className="font-semibold text-sm">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="font-medium mb-2 flex items-center gap-2">
          Files <Badge>125</Badge>
        </div>
        <div className="flex flex-col gap-3">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              {f.icon}
              <div className="flex-1">
                <div className="font-semibold text-sm">{f.name}</div>
                <div className="text-xs text-gray-500">{f.type} {f.size}</div>
              </div>
              <button>
                <svg width="20" height="20" fill="none"><path d="M5 10h10M10 5v10" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}