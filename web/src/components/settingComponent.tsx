/* eslint-disable prettier/prettier */
"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Sun, Moon, User, LogOut, Globe, Settings } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { clearCookies } from "@/utils/cookies";
import { redirect } from "next/navigation";
import { userService } from "@/services/user.service";
import { useAuthContext } from "@/contexts/auth.context";

export default function SettingPopover() {
        const { user } = useAuthContext()
        const { setTheme, theme } = useTheme();
        const [lang, setLang] = useState<"vi" | "en">("vi");
        const handleLogout = () => {
                if (user && user.id)
                        userService.logout(user?.id).then(() => {
                                clearCookies()
                                redirect("/")
                        })
        }
        return (
                <Popover >
                        <PopoverTrigger asChild >
                                <Button variant="ghost" aria-label="Settings">
                                        <Settings className="w-6 h-6" />
                                </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-4 flex flex-col gap-4">
                                <div className="font-semibold text-lg mb-2">Cài đặt</div>
                                <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                                <span className="flex items-center gap-2"><Sun className="w-4 h-4" /> Giao diện</span>
                                                <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                                >
                                                        {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                                                        {theme === "light" ? "Tối" : "Sáng"}
                                                </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                                <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Ngôn ngữ</span>
                                                <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setLang(lang === "vi" ? "en" : "vi")}
                                                >
                                                        {lang === "vi" ? "EN" : "VI"}
                                                </Button>
                                        </div>
                                        <Link href={"/profile"} className="flex items-center gap-2" >
                                                <User className="w-4 h-4" /> <span>Thông tin tài khoản</span>
                                        </Link>
                                        <button className="flex items-center gap-2" onClick={handleLogout} >
                                                <LogOut className="w-4 h-4" /> <span>Đăng xuất</span>
                                        </button>
                                </div>
                        </PopoverContent>
                </Popover>
        );
}