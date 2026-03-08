import type { IUserRole } from "../types/role.js";

export const roles = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: [
      { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
      { name: "Sarah James", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
      { name: "Michael Scott", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
      { name: "Angela White", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
      { name: "David Kim", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
      { name: "Michaela Sam", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
      { name: "Alla White", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
    ]
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    createdAt: "Feb 1, 2023",
    status: "active",
    users: [
      { name: "Jane Cooper", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
      { name: "Robert Fox", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
      { name: "Cody Fisher", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
      { name: "Esther Howard", avatar: "https://randomuser.me/api/portraits/women/9.jpg" },
      { name: "Jacob Jones", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Courtney Henry", avatar: "https://randomuser.me/api/portraits/women/23.jpg" },
    ]
  },
  {
    name: "supportadmin",
    type: "DEFAULT",
    createdAt: "Feb 1, 2023",
    status: "active",
    users: [
      { name: "Leslie Alexander", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
      { name: "Guy Hawkins", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
      { name: "Jenny Wilson", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
      { name: "Leslie Alexander", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
      { name: "Guy Hawkins", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
    ]
  },
  {
    name: "sales personnel",
    type: "CUSTOM",
    createdAt: "Mar 1, 2023",
    status: "active",
    users: [
      { name: "Dianne Russell", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
      { name: "Wade Warren", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
      { name: "Arlene McCoy", avatar: "https://randomuser.me/api/portraits/women/15.jpg" }
    ]
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    createdAt: "Apr 1, 2023",
    status: "inactive",
    users: [
      { name: "Savannah Nguyen", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
      { name: "Brooklyn Simmons", avatar: "https://randomuser.me/api/portraits/women/17.jpg" },
      { name: "Ronald Richards", avatar: "https://randomuser.me/api/portraits/men/18.jpg" }
    ]
  },
  {
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    createdAt: "May 1, 2023",
    status: "active",
    users: [
      { name: "Kristin Watson", avatar: "https://randomuser.me/api/portraits/women/19.jpg" },
      { name: "Albert Flores", avatar: "https://randomuser.me/api/portraits/men/20.jpg" },
      { name: "Ralph Edwards", avatar: "https://randomuser.me/api/portraits/men/21.jpg" }
    ]
  },
  {
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    createdAt: "Jun 1, 2023",
    status: "active",
    users: [
      { name: "Jacob Jones", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Courtney Henry", avatar: "https://randomuser.me/api/portraits/women/23.jpg" }
    ]
  }
] satisfies IUserRole[];

