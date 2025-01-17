import {
  Home,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  Plus,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Members", href: "/members", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Discussions", href: "/discussions", icon: MessageSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex w-20 flex-col items-center gap-6 border-r bg-white/80 backdrop-blur-sm py-8 left-0 top-0 min-h-screen relative shadow-lg z-10">
      <div className="mb-8">
        <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
          <div className="h-6 w-6 bg-white rounded-lg" />
        </div>
      </div>

      <nav className="flex flex-col items-center gap-4">
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`
                group relative flex h-12 w-12 items-center justify-center rounded-xl
                transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110"
                    : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                }
              `}
            >
              <link.icon className="h-5 w-5" />

              {/* Tooltip */}
              <span
                className="absolute left-14 z-40 rounded-md bg-gray-900 px-3 py-2 text-sm text-white opacity-0 transition-all duration-200 scale-95 origin-left
                group-hover:opacity-100 group-hover:scale-100 shadow-lg"
              >
                {link.name}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-400" />
              )}
            </Link>
          );
        })}
      </nav>

      <button
        className="mt-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
        hover:from-blue-700 hover:to-indigo-700
        transition-all duration-200 hover:scale-110 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Sidebar;
