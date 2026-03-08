import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RoleStatus, type IUserRole } from "@/types/roles";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, Check, CloudDownload } from "lucide-react";

export const columns: ColumnDef<IUserRole>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        className="border-gray-300 w-5 h-5 shadow-none"
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        className="border-gray-300 w-5 h-5 shadow-none"
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-gray-500"
        >
          Name
          <ArrowDown className="ml-1 h-2 w-2 text-gray-500" />
        </Button>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => {
      return <p className="text-gray-500">Type</p>;
    },
    cell: ({ row }) => {
      const role_type = row.getValue("type") as string | undefined;

      return <p className="text-gray-500">{role_type}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => {
      return <p className="text-gray-500">Date created</p>;
    },
    cell: ({ row }) => {
      const date_created = row.getValue("createdAt") as string | undefined;

      return <p className="text-gray-500">{date_created}</p>;
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return <p className="text-gray-500">Status</p>;
    },
    cell: ({ row }) => {
      const role_status = row.getValue("status");
      const is_active = role_status === RoleStatus.ACTIVE;

      return (
        <p
          className={`${is_active ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#F2994A] text-white"} rounded-xl px-3 py-1 flex text-center items-center gap-1 w-fit`}
        >
          {is_active && (
            <Check
              className="font-bold"
              color="#12B76A"
              size={"12px"}
              fontWeight={"600"}
            />
          )}
          {is_active ? "Active" : "In Active"}
        </p>
      );
    },
  },
  {
    accessorKey: "users",
    header: () => {
      return <p className="text-gray-500">Role users</p>;
    },
    cell: ({ row }) => {
      const users = row.getValue("users") as IUserRole["users"];
      const visibleUsers = users?.slice(0, 5) ?? [];
      const groupCount = Math.max((users?.length ?? 0) - 5, 0);

      return (
        <AvatarGroup>
          {visibleUsers.map((user) => {
            const user_abbreviation = user.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <Avatar>
                <AvatarImage src={user.avatar} alt={`${user.name} img`} />
                <AvatarFallback>{user_abbreviation}</AvatarFallback>
              </Avatar>
            );
          })}
          {groupCount > 0 && (
            <AvatarGroupCount>+{groupCount}</AvatarGroupCount>
          )}
        </AvatarGroup>
      );
    },
  },
  {
    id: "download",
    cell: () => <CloudDownload className="text-gray-500" />,
    enableSorting: false,
    enableHiding: false,
  },
];
