"use client";
import React from "react";
import { Nav } from "./nav";
import {
    ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound,
} from "lucide-react";
import { Button } from "./button";

import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function Sidebar({}: Props) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <div className="fixed min-w-[80px] border-r h-full px-3 pb-10 pt-24 overflow-auto ">
            {!mobileWidth && (
                <div className="absolute rounded-full right-[30px] w-3 top-7 z-50">
                    <Button
                        variant="outline"
                        className="rounded-full p-2 bg-gray-200"
                        onClick={toggleSidebar}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/admin/dashboard",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/admin/users",
                        icon: UsersRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/admin/orders",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Settings",
                        href: "/admin/settings",
                        icon: Settings,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    );
}
