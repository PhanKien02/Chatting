import Card from "@/components/card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, CalendarDays, File, FileText, Home, Share2 } from "lucide-react";

function IndexPage() {
    return (
        <div >
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Left: main content */}
                <div className="xl:col-span-3 space-y-6">
                    <p>Main</p>
                </div>

                {/* Right: sidebar */}
                <div className="xl:col-span-1 min-h-full bg-slate-700">
                    <p>Right</p>
                </div>
            </div>
        </div>
    )
}
export default IndexPage;