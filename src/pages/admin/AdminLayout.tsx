import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { LayoutDashboard, FolderKanban, LogOut, Menu, FileText } from "lucide-react";
import { toast } from "sonner";

export default function AdminLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/admin/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        toast.success("Logged out successfully");
        navigate("/");
    };

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
        { icon: FileText, label: "Content Editor", path: "/admin/editor" },
        { icon: FolderKanban, label: "Projects", path: "/admin/projects" },
    ];

    const NavContent = () => (
        <>
            <div className="p-6">
                <Link to="/admin" className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-indigo-600">Admin Panel</h1>
                </Link>
            </div>
            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                            ? "bg-indigo-600 text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </Button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
                <NavContent />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Mobile Header */}
                <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden flex items-center justify-between px-4 shrink-0">
                    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 flex flex-col w-64">
                            <SheetTitle className="sr-only">Admin Navigation</SheetTitle>
                            <NavContent />
                        </SheetContent>
                    </Sheet>

                    <span className="font-bold">Admin Panel</span>
                    <div className="w-10"></div> {/* Spacer for balancing */}
                </header>

                <main className="flex-1 p-6 overflow-auto bg-gray-50/50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
