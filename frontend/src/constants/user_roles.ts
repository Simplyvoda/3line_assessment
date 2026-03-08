import { RoleStatus, RoleType, type IUserRole } from "@/types/roles";

// static data for user roles table
export const data: IUserRole[] = [
  {
    name: "Superadmin",
    type: RoleType.DEFAULT,
    createdAt: "Jan 1, 2023",
    status: RoleStatus.ACTIVE,
    users: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Sarah James",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Michael Scott",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        name: "Angela White",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        name: "David Kim",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ],
  },
  {
    name: "Merchantadmin",
    type: RoleType.DEFAULT,
    createdAt: "Feb 1, 2023",
    status: RoleStatus.ACTIVE,
    users: [
      {
        name: "Jane Cooper",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        name: "Robert Fox",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "Cody Fisher",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "Esther Howard",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      },
    ],
  },
  {
    name: "supportadmin",
    type: RoleType.DEFAULT,
    createdAt: "Feb 1, 2023",
    status: RoleStatus.ACTIVE,
    users: [
      {
        name: "Leslie Alexander",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Guy Hawkins",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        name: "Jenny Wilson",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    ],
  },
  {
    name: "sales personnel",
    type: RoleType.CUSTOM,
    createdAt: "Mar 1, 2023",
    status: RoleStatus.ACTIVE,
    users: [
      {
        name: "Dianne Russell",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      {
        name: "Wade Warren",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
      },
      {
        name: "Arlene McCoy",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      },
    ],
  },
  {
    name: "Deputy sales personnel",
    type: RoleType.CUSTOM,
    createdAt: "Apr 1, 2023",
    status: RoleStatus.INACTIVE,
    users: [
      {
        name: "Savannah Nguyen",
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
      },
      {
        name: "Brooklyn Simmons",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      },
      {
        name: "Ronald Richards",
        avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      },
    ],
  },
  {
    name: "Developeradmin",
    type: RoleType.SYSTEM_CUSTOM,
    createdAt: "May 1, 2023",
    status: RoleStatus.ACTIVE,
    users: [
      {
        name: "Kristin Watson",
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
      },
      {
        name: "Albert Flores",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        name: "Ralph Edwards",
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      },
    ],
  },
  {
    name: "Developer-basic",
    type: RoleType.SYSTEM_CUSTOM,
    createdAt: "Jun 1, 2023",
    status: RoleStatus.ACTIVE,
    users: [
      {
        name: "Jacob Jones",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        name: "Courtney Henry",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      },
    ],
  },
];

// initial data for active roles section
export const staticData= [
  {
    id: "superadmin",
    name: "Superadmin",
    lastActive: "06/2023",
    isDefault: true,
  },
  {
    id: "developeradmin",
    name: "Developeradmin",
    lastActive: "01/2023",
    isDefault: false,
  },
  {
    id: "supportadmin",
    name: "Supportadmin",
    lastActive: "10/2022",
    isDefault: false,
  },
];

// static data for available roles
export const availableRoles: IUserRole[] = [
  {
    id: "superadmin",
    name: "Superadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: RoleStatus.ACTIVE,
  },
  {
    id: "merchantadmin",
    name: "Merchantadmin",
    type: "DEFAULT",
    createdAt: "Feb 1, 2023",
    status: RoleStatus.ACTIVE,
  },
  {
    id: "supportadmin",
    name: "supportadmin",
    type: "DEFAULT",
    createdAt: "Feb 1, 2023",
    status: RoleStatus.ACTIVE,
  },
  {
    id: "sales-personnel",
    name: "sales personnel",
    type: "CUSTOM",
    createdAt: "Mar 1, 2023",
    status: RoleStatus.ACTIVE,
  },
  {    id: "deputy-sales-personnel",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    createdAt: "Apr 1, 2023",
    status: RoleStatus.INACTIVE,
  },
  {
    id: "developeradmin",
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    createdAt: "May 1, 2023",
    status: RoleStatus.ACTIVE,
  },
  {
    id: "developer-basic",
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    createdAt: "Jun 1, 2023",
    status: RoleStatus.ACTIVE,
  },
];
