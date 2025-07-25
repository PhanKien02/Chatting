'use client'
import { ThemeToggle } from './theme-toggle';
import { SidebarTrigger } from './ui/sidebar';
import { Input } from './ui/input';
import { useAuthContext } from '@/contexts/auth.context';
import { useEffect, useState } from 'react';
import { IUser } from '@/models/user.model';
import { toast } from '@/hooks/use-toast';
import { clearCookies } from '@/utils/cookies';
import { Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarImage } from './ui/avatar';
import { redirect } from 'next/navigation';
import { userService } from '@/services/user.service';

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}
export const NavHeader = () => {
    const { user } = useAuthContext()
    const logout = async () => {
        if (user?.id)
            await userService.logout(user?.id).then(() => {
                clearCookies();
                toast({ title: 'Đăng xuất', description: 'Đăng xuất thành công', variant: 'success', })
                redirect('/auth/login')
            })
    }

    return (
        <section className='py-4 border-b-2'>
            <nav className='justify-between flex mr-10'>
                <SidebarTrigger />
                <div className='relative w-80 border-2 rounded-lg'>
                    <Search className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3' />
                    <Input type='text' placeholder='Search' className='pl-12 pr-4' />
                </div>
                <div className='flex'>
                    <ThemeToggle />
                    <DropdownMenu dir='ltr' >
                        <DropdownMenuTrigger>
                            <Avatar>
                                {
                                    user && user.avatarUrl
                                        ? <AvatarImage src={user.avatarUrl} alt="@shadcn" />
                                        : <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
                                }
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='cursor-pointer'>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Cá nhân</DropdownMenuItem>
                            <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                            <DropdownMenuItem onClick={logout}>
                                Đăng xuất
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </section >
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <a
            className='flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground'
            href={item.url}
        >
            <div className='text-foreground'>{item.icon}</div>
            <div>
                <div className='text-sm font-semibold'>{item.title}</div>
                {item.description && <p className='text-sm leading-snug text-muted-foreground'>{item.description}</p>}
            </div>
        </a>
    );
};
