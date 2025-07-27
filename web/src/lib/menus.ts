import { Calendar, CalendarCheck, FileStack, Home, Inbox, LayoutDashboard, ListTodo, LucideProps, Search, Send, Settings, SquareKanban, User, Video } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export type Menu = {
    title: string;
    url: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    children?: Menu[];
};
export const adminMenus: Menu[] = [
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

export const clientMenus: Menu[] = [
    {
        title: "Overview",
        url: "/overview",
        icon: LayoutDashboard
    },
    {
        title: "Project",
        url: "/project",
        icon: SquareKanban,
        children: [
            {
                title: "Task",
                url: "/",
                icon: ListTodo,
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
                title: "Schedule",
                url: "/",
                icon: CalendarCheck
            },
            {
                title: "Document",
                url: "/",
                icon: FileStack
            },
        ]
    },
    {
        title: "Message",
        url: "/message",
        icon: Send
    },
    {
        title: "Meeting",
        url: "/meeting",
        icon: Video
    },

]