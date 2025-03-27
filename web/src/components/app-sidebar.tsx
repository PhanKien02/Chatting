import {
    Calendar,
    ChevronRight,
    ChevronUp,
    Home,
    Inbox,
    Search,
    Settings,
    User,
    User2,
} from "lucide-react";

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
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
        children: [
            {
                title: "Dashboad",
                url: "/admin/dashboard",
                icon: Home,
                children: [],
            },
            {
                title: "user",
                url: "/admin/users",
                icon: User,
                children: [],
            },
            {
                title: "setting",
                url: "#",
                icon: Home,
                children: [],
            },
        ],
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];
export function AppSidebar() {
    const { toast } = useToast();
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader></SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) =>
                                !item.children ? (
                                    <SidebarMenuItem
                                        key={item.title}
                                        className="ml-2"
                                    >
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ) : (
                                    <Collapsible
                                        key={item.title}
                                        title={item.title}
                                        defaultOpen
                                        className="group/collapsible"
                                    >
                                        <SidebarGroup>
                                            <SidebarGroupLabel
                                                asChild
                                                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                            >
                                                <CollapsibleTrigger>
                                                    <item.icon className="mr-2" />{" "}
                                                    {item.title}
                                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                                </CollapsibleTrigger>
                                            </SidebarGroupLabel>
                                            <CollapsibleContent>
                                                <SidebarGroupContent>
                                                    <SidebarMenuSub>
                                                        {item.children.map(
                                                            (child) => (
                                                                <SidebarMenuSubItem
                                                                    key={
                                                                        child.title
                                                                    }
                                                                >
                                                                    <SidebarMenuSubButton
                                                                        asChild
                                                                    >
                                                                        <a
                                                                            href={
                                                                                child.url
                                                                            }
                                                                        >
                                                                            <child.icon />
                                                                            {
                                                                                child.title
                                                                            }
                                                                        </a>
                                                                    </SidebarMenuSubButton>
                                                                </SidebarMenuSubItem>
                                                            )
                                                        )}
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
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => {
                                        deleteCookie("accessToken");
                                        deleteCookie("refreshToken");
                                        toast({
                                            title: "Đăng Xuất",
                                            description: "Đăng xuất thành công",
                                            variant: "success",
                                        });
                                    }}
                                >
                                    <a className="w-full" href="/">
                                        Đăng xuất
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
