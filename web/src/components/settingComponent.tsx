/* eslint-disable prettier/prettier */
"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Sun, Moon, User, LogOut, Globe, Settings } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function SettingPopover() {
        const { setTheme, theme } = useTheme();
        const [lang, setLang] = useState<"vi" | "en">("vi");

        return (
                <Popover>
                        <PopoverTrigger asChild>
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
                                        <div className="flex items-center gap-2">
                                                <User className="w-4 h-4" /> <span>Thông tin tài khoản</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <LogOut className="w-4 h-4" /> <span>Đăng xuất</span>
                                        </div>
                                </div>
                        </PopoverContent>
                </Popover>
        );
}