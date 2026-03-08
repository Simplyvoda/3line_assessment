import { Construction } from "lucide-react";
import PageHeader from "./PageHeader";

interface ComingSoonProps {
  title: string;
  description?: string;
  showHeader?: boolean;
}

const ComingSoon = ({
  title,
  description,
  showHeader = true,
}: ComingSoonProps) => {
  return (
    <div>
      {showHeader && <PageHeader pageTitle={title} pageDesc={description} />}

      <div className="flex items-center justify-center mt-8">
        <div className="flex flex-col items-center text-center p-10  bg-gray-50 max-w-md">
          <Construction className="w-12 h-12 text-gray-400 mb-4" />

          <p className="text-gray-900 font-medium text-xl">
            Nothing to see here yet
          </p>

          <p className="text-gray-500 text-md mt-2 font-light">
            {title} page is currently under construction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
