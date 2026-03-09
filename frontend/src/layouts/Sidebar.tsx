import NewFeatureCard from "@/components/dashboard/NewFeatureCard";
import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { NAV_ITEMS } from "@/constants/navigation";
import { LogOut, Search } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  drawerOpen: boolean;
}

export default function Sidebar({ drawerOpen }: SidebarProps) {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Sidebar menu"
      className={`
      fixed top-0 left-0 z-50 
      transition-transform duration-300 ease-in-out
      md:static md:translate-x-0 md:z-auto md:h-screen
      bg-white w-[285px] shrink-0 px-4 pt-6 pb-5 shadow-md h-full overflow-x-hidden flex flex-col gap-6
      ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" alt="logo" />
        <h2 className="text-gray-900 [text-shadow:0_4px_4px_rgba(0,0,0,0.3)] text-xl">
          {" "}
          Untitled UI
        </h2>
      </div>

      <InputGroup className="my-0">
        <InputGroupInput
          id="search-field"
          type="text"
          placeholder="Olivia Rhye"
        />
        <InputGroupAddon align="inline-start">
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <nav className="flex flex-col gap-2" aria-label="Main navigation">
        {NAV_ITEMS.map((link) => (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) =>
              `relative flex items-center justify-start gap-2 px-3 py-2 cursor-pointer w-full ${isActive ? "text-gray-900 bg-gray-50 rounded-md" : "text-gray-700"}`
            }
          >
            <link.icon className="text-gray-500" size={20} />
            <p className="text-gray-700 text-md">{link.label}</p>

            {link.notif_count > 0 && (
              <Badge className="absolute right-3 bg-gray-100 text-gray-700 text-md px-3">
                {link.notif_count}
              </Badge>
            )}
          </NavLink>
        ))}
      </nav>

      {showBanner && <NewFeatureCard onDismiss={closeBanner} />}

      <div className="mt-auto flex items-center pb-2 pt-6 justify-between w-full border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src="/images/avatar.jpg" alt="user profile img" />
          </div>

          <div className="flex flex-col">
            <p className="text-gray-800 text-sm">Olivia Rhye</p>
            <p className="text-gray-500 text-xs">olivia@untitledui.com</p>
          </div>
        </div>

        <button aria-label="Log out" className="text-gray-500 cursor-pointer">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
}
