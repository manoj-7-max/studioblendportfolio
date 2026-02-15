import { useEffect } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FolderKanban, LogOut } from "lucide-react";
import { toast } from "sonner";

export default function AdminLayout() {
    const navigate = useNavigate();
    const location = useLocation();

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
        { icon: FolderKanban, label: "Projects", path: "/admin/projects" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600">Admin Panel</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
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
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleLogout}>
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Mobile Header */}
                <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden flex items-center justify-between px-4">
                    <span className="font-bold">Admin Panel</span>
                    <Button variant="ghost" size="icon" onClick={handleLogout}>
                        <LogOut className="w-5 h-5" />
                    </Button>
                </header>

                <main className="flex-1 p-6 overflow-auto bg-gray-50/50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
