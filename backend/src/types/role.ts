export const RoleType = {
    DEFAULT: "DEFAULT",
    CUSTOM: "CUSTOM",
    SYSTEM_CUSTOM: "SYSTEM-CUSTOM",
  } as const;
  export type RoleType = (typeof RoleType)[keyof typeof RoleType];
  
  export const RoleStatus = {
    ACTIVE: "active",
    INACTIVE: "inactive"
  } as const;
  export type RoleStatus = typeof RoleStatus[keyof typeof RoleStatus];
  
  export type IUserRole = {
    name: string;
    type: RoleType;
    createdAt: string;
    status: RoleStatus;
    users: {name: string; avatar: string}[];
  };