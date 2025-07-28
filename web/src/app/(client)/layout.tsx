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
        <div>
            <SidebarProvider>
                <div className='relative flex  min-h-screen w-screen'>
                    <AppSidebar menu={clientMenus} />
                    <div className='flex-1 p-2 '>
                        <NavHeader />
                        <ScrollArea className='rounded-md border'>
                            <QueryClientProvider client={queryClient}>
                                <main>{children}</main>
                            </QueryClientProvider>
                            <ScrollBar orientation='vertical' />
                        </ScrollArea>
                    </div>
                </div>
            </SidebarProvider>
        </div>
    );
}
