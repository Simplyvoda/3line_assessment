import { Checkbox } from "@/components/ui/checkbox";
import { Users } from "lucide-react";

interface RoleCardProps {
  id: string;
  name: string;
  lastActive: string;
  isDefault: boolean;
  checked: boolean;
  onCheckChange: () => void;
  onRemove: (id: string) => void;
  onSetDefault: (id: string) => void;
}

const RoleCard = ({
  id,
  name,
  lastActive,
  isDefault,
  checked,
  onCheckChange,
  onRemove,
  onSetDefault,
}: RoleCardProps) => {
  return (
    <div
      className={`relative flex items-center justify-between w-full rounded-xl border p-5 hover:bg-purple-50/40 cursor-pointer ${checked ? "border-primary bg-[#F9F5FF]" : "border-gray-200 bg-white"}`}
      onClick={onCheckChange}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-12 items-center justify-center rounded-sm border bg-white">
          <Users className="h-6 w-6 text-gray-500" />
        </div>

        <div className="flex flex-col text-sm">
          <p
            className={`font-medium  ${checked ? "text-[#53389E]" : "text-gray-700"}`}
          >
            {name}
          </p>
          <p
            className={`font-light  ${checked ? "text-[#7F56D9]" : "text-gray-500"}`}
          >
            Last active {lastActive}
          </p>

          <div className="flex gap-2 mt-1 text-xs lg:text-sm">
            {!isDefault && (
              <button
                onClick={() => onSetDefault(id)}
                className={` cursor-pointer  ${checked ? "text-[#9E77ED] hover:text-[#7F56D9]" : "text-gray-500 hover:text-gray-700"}`}
              >
                Set as default
              </button>
            )}

            <button className="font-lighter text-[#6941C6] hover:opacity-80 cursor-pointer">
              Edit
            </button>

            <button
              onClick={() => onRemove(id)}
              className="font-lighter text-[#6941C6] hover:opacity-80 cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <Checkbox
        checked={checked}
        onCheckedChange={onCheckChange}
        className="top-5 right-5 absolute h-5 w-5 rounded-full border border-gray-300 cursor-pointer"
      />
    </div>
  );
};

export default RoleCard;
