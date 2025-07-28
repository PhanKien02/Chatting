'use client'
import { ChevronRight, ChevronUp, User2 } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Menu } from '@/lib/menus';
import Image from 'next/image';
import { clearCookies } from '@/utils/cookies';
import { useAuthContext } from '@/contexts/auth.context';
import { useEffect, useState } from 'react';
import { IUser } from '@/models/user.model';
import { userService } from '@/services/user.service';
import { redirect } from 'next/navigation';
// Menu items.

export function AppSidebar({ menu }: { menu: Menu[] }) {
    const { toast } = useToast();
    const { user } = useAuthContext()
    const [curentUser, setCurentUser] = useState<IUser | undefined>();
    useEffect(() => {
        if (user) setCurentUser(user)
    }, [user])
    const logout = async () => {
        if (user?.id)
            await userService.logout(user?.id).then(() => {
                clearCookies()
                toast({
                    title: 'Đăng Xuất',
                    description: 'Đăng xuất thành công',
                    variant: 'success',
                });
                redirect('/auth/login')
            })
    }
    return (
        <Sidebar collapsible='offcanvas'>
            <SidebarHeader>
                <div className='flex justify-center'>
                    <Image src='https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg' alt='logo' width={70} height={70} priority />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.map(item =>
                                !item.children ? (
                                    <SidebarMenuItem key={item.title} className='ml-2'>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ) : (
                                    <Collapsible key={item.title} title={item.title} defaultOpen className='group/collapsible'>
                                        <SidebarGroup>
                                            <SidebarGroupLabel
                                                asChild
                                                className='group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                                            >
                                                <CollapsibleTrigger>
                                                    <item.icon className='mr-2' /> {item.title}
                                                    <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                                                </CollapsibleTrigger>
                                            </SidebarGroupLabel>
                                            <CollapsibleContent>
                                                <SidebarGroupContent>
                                                    <SidebarMenuSub>
                                                        {item.children.map(child => (
                                                            <SidebarMenuSubItem key={child.title}>
                                                                <SidebarMenuSubButton asChild>
                                                                    <a href={child.url}>
                                                                        <child.icon />
                                                                        {child.title}
                                                                    </a>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        ))}
                                                    </SidebarMenuSub>
                                                </SidebarGroupContent>
                                            </CollapsibleContent>
                                        </SidebarGroup>
                                    </Collapsible>
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {curentUser && curentUser?.fullName ? curentUser?.fullName : "userName"}
                                    <ChevronUp className='ml-auto' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side='top' className='w-[--radix-popper-anchor-width]'>
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logout}>
                                    <span>
                                        Đăng xuất
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
