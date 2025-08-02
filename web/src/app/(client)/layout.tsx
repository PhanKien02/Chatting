'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { NavHeader } from '@/components/header';
import { ScrollBar } from '@/components/ui/scroll-area';
import { SidebarProvider } from '@/components/ui/sidebar';
import { clientMenus } from '@/lib/menus';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <SidebarProvider>
            <div className="relative flex min-h-screen w-screen">
                <AppSidebar menu={clientMenus} />
                {/* Right side */}
                <div className="flex flex-col flex-1">
                    {/* Header */}
                    <NavHeader />
                    {/* Main content */}
                    <QueryClientProvider client={queryClient}>
                        <div className="flex-1 overflow-auto">
                            <ScrollArea className="h-full w-full">
                                <main className="min-h-full w-full">
                                    {children}
                                </main>
                                <ScrollBar orientation="vertical" />
                            </ScrollArea>
                        </div>
                    </QueryClientProvider>
                </div>
            </div>
        </SidebarProvider>
    );
}
