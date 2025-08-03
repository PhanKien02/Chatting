"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { NavHeader } from "@/components/header";
import { ScrollBar } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { adminMenus } from "@/lib/menus";
import { QueryProvider } from "@/provider/query-privider";
import { ScrollArea } from "@radix-ui/react-scroll-area";
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <div className='relative flex  min-h-screen w-screen'>
                    <AppSidebar menu={adminMenus} />
                    <div className='flex-1 p-2 '>
                        <NavHeader />
                        <ScrollArea className='rounded-md border'>
                            <main>
                                <QueryProvider>{children}</QueryProvider>
                            </main>
                            <ScrollBar orientation='vertical' />
                        </ScrollArea>
                    </div>
                </div>
            </SidebarProvider>
        </div>
    );
}
