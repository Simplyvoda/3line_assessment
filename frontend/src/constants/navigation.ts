import {
    House,
    BarChart2,
    Layers3,
    CheckSquare,
    Flag,
    Users,
    LifeBuoy,
    Settings,
  } from "lucide-react";

export const NAV_ITEMS = [
    { label: "Home", icon: House, href: "/home", notif_count: 0  },
    { label: "Dashboard", icon: BarChart2, href: "/dashboard", notif_count: 10 },
    { label: "Projects", icon: Layers3, href: "/projects", notif_count: 0  },
    { label: "Tasks", icon: CheckSquare, href: "/tasks", notif_count: 0  },
    { label: "Reporting", icon: Flag, href: "/reporting", notif_count: 0  },
    { label: "Users", icon: Users, href: "/users", notif_count: 0  },
    { label: "Support", icon: LifeBuoy, href: "/support", notif_count: 0  },
    { label: "Settings", icon: Settings, href: "/settings", notif_count: 0  },
  ];