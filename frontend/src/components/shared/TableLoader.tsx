import { Skeleton } from "@/components/ui/skeleton";

interface TableLoaderProps {
  column_count: number;
}

export function TableLoader({ column_count }: TableLoaderProps) {
  const ROWS = 5;

  return (
    <div className="flex flex-col gap-3">
      <div className="h-10 bg-gray-300 rounded-t-md"></div>
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${column_count}, 1fr)` }}
        >
          {Array.from({ length: column_count }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-8 w-full rounded-none bg-gray-200" />
          ))}
        </div>
      ))}
    </div>
  );
}
