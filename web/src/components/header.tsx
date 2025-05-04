import { Book, Menu, Search, Sunset, Trees, Zap } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { SidebarTrigger } from './ui/sidebar';
import { Input } from './ui/input';

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface NavHeaderProps {
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

export const NavHeader = ({
    auth = {
        login: { title: 'Login', url: '#' },
        signup: { title: 'Sign up', url: '#' },
    },
}: NavHeaderProps) => {
    return (
        <section className='py-4 border-b-2'>
            <div className='container'>
                <nav className='justify-between flex'>
                    <SidebarTrigger className='w-10 h-10' />
                    <div className='relative w-80 border-2 rounded-lg'>
                        <Search className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3' />
                        <Input type='text' placeholder='Search' className='pl-12 pr-4' />
                    </div>
                    <div className='flex gap-2'>
                        <ThemeToggle />
                        <Button asChild variant='outline' size='sm'>
                            <a href={auth.login.url}>{auth.login.title}</a>
                        </Button>
                        <Button asChild size='sm'>
                            <a href={auth.signup.url}>{auth.signup.title}</a>
                        </Button>
                    </div>
                </nav>
            </div>
        </section>
    );
};

// const renderMenuItem = (item: MenuItem) => {
//     if (item.items) {
//         return (
//             <NavigationMenuItem key={item.title}>
//                 <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
//                 <NavigationMenuContent className='bg-popover text-popover-foreground'>
//                     {item.items.map(subItem => (
//                         <NavigationMenuLink asChild key={subItem.title} className='w-80'>
//                             <SubMenuLink item={subItem} />
//                         </NavigationMenuLink>
//                     ))}
//                 </NavigationMenuContent>
//             </NavigationMenuItem>
//         );
//     }

//     return (
//         <NavigationMenuItem key={item.title}>
//             <NavigationMenuLink
//                 href={item.url}
//                 className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground'
//             >
//                 {item.title}
//             </NavigationMenuLink>
//         </NavigationMenuItem>
//     );
// };

// const renderMobileMenuItem = (item: MenuItem) => {
//     if (item.items) {
//         return (
//             <AccordionItem key={item.title} value={item.title} className='border-b-0'>
//                 <AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>{item.title}</AccordionTrigger>
//                 <AccordionContent className='mt-2'>
//                     {item.items.map(subItem => (
//                         <SubMenuLink key={subItem.title} item={subItem} />
//                     ))}
//                 </AccordionContent>
//             </AccordionItem>
//         );
//     }

//     return (
//         <a key={item.title} href={item.url} className='text-md font-semibold'>
//             {item.title}
//         </a>
//     );
// };

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
