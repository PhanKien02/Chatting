"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { NavHeader } from "@/components/header";
import { ScrollBar } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { clientMenus } from "@/lib/menus";
import { QueryProvider } from "@/provider/query-privider";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className='relative flex min-h-screen w-screen'>
                <AppSidebar menu={clientMenus} />
                {/* Right side */}
                <div className='flex flex-col flex-1'>
                    {/* Header */}
                    <NavHeader />
                    {/* Main content */}
                    <QueryProvider>
                        <div className='flex-1 overflow-auto'>
                            <ScrollArea className='h-full w-full'>
                                <main className='min-h-full w-full'>{children}</main>
                                <ScrollBar orientation='vertical' />
                            </ScrollArea>
                        </div>
                    </QueryProvider>
                </div>
            </div>
        </SidebarProvider>
    );
}
