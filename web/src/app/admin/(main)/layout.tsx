'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </SidebarProvider>
        </div>
    );
}
