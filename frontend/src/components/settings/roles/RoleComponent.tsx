import { getRoles } from "@/api/roles";
import { columns } from "@/components/settings/data_table/UserRolesColumn";
import { UserRolesDataTable } from "@/components/settings/data_table/UserRolesTable";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGenericQuery } from "@/hooks/queries/useGenericQuery";
import type { ApiResponse } from "@/types/api_response";
import type { IUserRole } from "@/types/roles";
import { DownloadCloud, Mail } from "lucide-react";
import { useState } from "react";
import ActiveRoleSection from "./ActiveRoleSection";

type PreferredEmailOption = "account-email" | "alt-email";

const RoleComponent = () => {
  const { data, isLoading } = useGenericQuery<ApiResponse<IUserRole[]>>({
    queryKey: ["roles"],
    queryFn: async () => await getRoles(),
  });

  const [preferedEmail, setPreferedEmail] =
    useState<PreferredEmailOption>("account-email");

  const handlePreferedEmailValueChange = (val: PreferredEmailOption) => {
    setPreferedEmail(val);
  };

  const emailOptions = [
    {
      value: "account-email",
      label: "My account email",
      description: "olivia@untitledui.com",
    },
    {
      value: "alt-email",
      label: "An alternative email",
      extra: preferedEmail === "alt-email" && (
        <InputGroup className="mt-2 w-full lg:w-[450px] bg-white flex-1">
          <InputGroupInput placeholder="billing@untitledui.com" />
          <InputGroupAddon align="inline-start">
            <Mail />
          </InputGroupAddon>
        </InputGroup>
      ),
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-gray-900 text-lg leading-7 mt-8">User Roles</h2>
        <p className="text-gray-500 text-sm leading-5 font-light">
          Update your roles details and information.
        </p>

        <hr className="w-full border-gray-200 my-6"></hr>

        <div className="flex flex-col md:flex-row space-y-4 md:space-x-6">
          <div>
            <p className="text-gray-700 text-md leading-5">Connected email</p>
            <p className="text-gray-500 text-sm font-light">
              Select role account
            </p>
          </div>

          <RadioGroup
            defaultValue="account-email"
            className="flex flex-col space-y-4"
            onValueChange={(val) =>
              handlePreferedEmailValueChange(val as PreferredEmailOption)
            }
          >
            {emailOptions.map((option) => (
              <div className="flex gap-2">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="data-[state=checked]:border-[#6941C6] cursor-pointer"
                />
                <div className="w-full md:w-auto">
                  <Label htmlFor={option.value} className="text-gray-700">
                    {option.label}
                  </Label>

                  {option.extra && option.extra}
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <hr className="w-full border-gray-200 my-6"></hr>

        <ActiveRoleSection />
      </div>

      <div className="mb-6">
        <div className="flex flex-col space-y-3 md:flex-row w-full items-start md:justify-between my-7">
          <h2 className="text-lg text-gray-900 leading-7">User Roles</h2>

          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 cursor-pointer"
          >
            {" "}
            <DownloadCloud /> Download all
          </Button>
        </div>

        <UserRolesDataTable
          columns={columns}
          data={data ? (data.data as IUserRole[]) : []}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default RoleComponent;
