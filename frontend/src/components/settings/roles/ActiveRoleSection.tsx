import RoleCard from "@/components/settings/roles/RoleCard";
import { availableRoles } from "@/constants/user_roles";
import { useDisclosure } from "@/hooks/useDiclosure";
import type { IActiveUserRole } from "@/types/roles";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddUserToRoleModal from "./modals/AddUserToRoleModal";

const ActiveRoleSection = () => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  const [activeUserRoles, setActiveUserRoles] = useState<
    IActiveUserRole[] | []
  >(() => {
    const savedActiveRoleData = sessionStorage.getItem("rolesData");

    return savedActiveRoleData ? JSON.parse(savedActiveRoleData) : [];
  });
  const [selectedRole, setSelectedRole] = useState<string>(() => {
    const defaultRole = activeUserRoles.find((role) => role.isDefault === true);

    return defaultRole ? defaultRole.name : "";
  });

  const handleAddUserRole = (selectedRoles: string[]) => {
    // find roles in available roles data
    // add them to replace userRolesData
    // add them to sessionStorage
    const newUserRoles = [];

    for (const user_role of selectedRoles) {
      const fullRoleData = availableRoles.find((role) => role.id === user_role);

      if (fullRoleData)
        newUserRoles.push({
          id: user_role,
          name: fullRoleData?.name,
          lastActive: fullRoleData.createdAt, // using created at date for last active date
          isDefault: false,
        });
    }

    setRolesAndPersist(newUserRoles);

    alert("Role added to user successfuly !");
  };

  const handleRemoveRole = (roleId: string) => {
    // filter active roles
    const updated = activeUserRoles.filter((role) => role.id !== roleId);

    if (updated.length === 0) {
      alert("Cannot remove. At least one role should be left !");
      return;
    }

    setRolesAndPersist(updated);

    alert("Role removed from user successfuly !");
  };

  const handleSetDefault = (roleId: string) => {
    const updated = activeUserRoles.map((role) => ({
      ...role,
      isDefault: role.id === roleId,
    }));

    setRolesAndPersist(updated);

    alert("Role set as default successfuly !");
  };

  const setRolesAndPersist = (updatedRoles: IActiveUserRole[]) => {
    setActiveUserRoles(updatedRoles);
    sessionStorage.setItem("rolesData", JSON.stringify(updatedRoles));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-x-8">
        <div>
          <p className="text-gray-700 text-md leading-5">Active Role</p>
          <p className="text-gray-500 text-sm font-light">
            Select active role available to the user.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[65%]">
          <div className="w-full flex flex-col space-y-3 overflow-y-scroll max-h-[500px]">
            {activeUserRoles.map((each) => {
              return (
                <RoleCard
                  key={each.id}
                  id={each.id}
                  name={each.name}
                  lastActive={each.lastActive}
                  isDefault={each.isDefault}
                  checked={selectedRole == each.name}
                  onCheckChange={() => setSelectedRole(each.name)}
                  onRemove={handleRemoveRole}
                  onSetDefault={handleSetDefault}
                />
              );
            })}
          </div>
          <p
            className="flex gap-2 text-gray-500 text-sm md:text-md mt-2 md:mt-4 cursor-pointer"
            onClick={onToggle}
          >
            <Plus size={20} aria-hidden="true"/>
            Add role to user
          </p>
        </div>
      </div>

      {isOpen && (
        <AddUserToRoleModal
          isOpen={isOpen}
          onClose={onClose}
          onAddRoles={handleAddUserRole}
          alreadySetRoles={activeUserRoles as IActiveUserRole[]}
        />
      )}
    </>
  );
};

export default ActiveRoleSection;
