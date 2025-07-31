import { ReactNode } from "react";
import { useLocation } from "react-router";
import { Home01, BarChart01 } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";  
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import type { NavItemType } from "@/components/application/app-navigation/config";

interface AppLayoutProps {
    children: ReactNode;
}

const navigationItems: NavItemType[] = [
    {
        label: "Home",
        href: "/",
        icon: Home01,
    },
    {
        label: "Dashboard", 
        href: "/dashboard",
        icon: BarChart01,
    },
];

const headerNavItems = [
    {
        label: "Home",
        href: "/",
        icon: Home01,
    },
    {
        label: "Dashboard",
        href: "/dashboard", 
        icon: BarChart01,
    },
];

export const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Mark current navigation item
    const sidebarItems = navigationItems.map(item => ({
        ...item,
        current: item.href === currentPath
    }));

    const headerItems = headerNavItems.map(item => ({
        ...item,
        current: item.href === currentPath
    }));

    return (
        <div className="flex h-screen bg-primary">
            {/* Sidebar Navigation */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <SidebarNavigationSimple
                    activeUrl={currentPath}
                    items={sidebarItems}
                    showAccountCard={true}
                    hideBorder={false}
                />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header Navigation - Always present, handles responsive display internally */}
                <HeaderNavigationBase
                    activeUrl={currentPath}
                    items={headerItems}
                    showAvatarDropdown={true}
                    hideBorder={false}
                />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-primary">
                    {children}
                </main>
            </div>
        </div>
    );
};