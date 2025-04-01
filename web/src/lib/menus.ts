import { Calendar, Home, Inbox, LucideProps, Search, Settings, User } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
type Menu = {
    title: string;
    url: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    children?: Menu[];
};
export const menus: Menu[] = [
    {
        title: 'Home',
        url: '#',
        icon: Home,
        children: [
            {
                title: 'Dashboad',
                url: '/admin/dashboard',
                icon: Home,
                children: [],
            },
            {
                title: 'user',
                url: '/admin/users',
                icon: User,
                children: [],
            },
            {
                title: 'Loại sách',
                url: '/admin/topics',
                icon: Home,
                children: [],
            },
        ],
    },
    {
        title: 'Inbox',
        url: '#',
        icon: Inbox,
    },
    {
        title: 'Calendar',
        url: '#',
        icon: Calendar,
    },
    {
        title: 'Search',
        url: '#',
        icon: Search,
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings,
    },
];
