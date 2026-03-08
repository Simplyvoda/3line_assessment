import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { availableRoles } from "@/constants/user_roles";
import type { IActiveUserRole } from "@/types/roles";
import { Users } from "lucide-react";
import { useState } from "react";

interface AddUserToRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRoles: (roles: string[]) => void;
  alreadySetRoles: IActiveUserRole[];
}

const AddUserToRoleModal = ({
  isOpen,
  onClose,
  onAddRoles,
  alreadySetRoles,
}: AddUserToRoleModalProps) => {
    const [selectedRoles, setSelectedRoles] = useState<string[]>(() => {
        const role_ids = alreadySetRoles.map((role) => role.id )

        return role_ids ? role_ids : [];
    },)


  if (!isOpen) return null;

  const toggleRole = (roleId: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleId)
        ? prev.filter((id) => id !== roleId)
        : [...prev, roleId],
    );
  };

  const handleAdd = () => {
    onAddRoles(selectedRoles);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[550px]">

        <DialogHeader>
          <DialogTitle>Add role to user</DialogTitle>
          <DialogDescription>
            Select one or more roles to assign.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
          {availableRoles.filter((role) => role.status == 'active').map((role) => {
            const selected = selectedRoles.includes(role?.id as string);
            return (
              <div
                className={`relative flex items-center justify-between w-full rounded-xl border p-5 hover:bg-purple-50/40 cursor-pointer ${selected ? "border-primary bg-[#F9F5FF]" : "border-gray-200 bg-white"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-12 items-center justify-center rounded-sm border bg-white">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>

                  <div className="flex flex-col text-sm">
                    <p
                      className={`font-medium  ${selected ? "text-[#53389E]" : "text-gray-700"}`}
                    >
                      {role.name}
                    </p>
                  </div>
                </div>

                <Checkbox
                  checked={selected}
                  onCheckedChange={() => toggleRole(role?.id as string)}
                  className="top-5 right-5 absolute h-5 w-5 rounded-full border border-gray-300 cursor-pointer"
                />
              </div>
            );
          })}
        </div>

        <DialogFooter className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleAdd} disabled={selectedRoles.length === 0} className="cursor-pointer">
            Add role(s)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserToRoleModal;
