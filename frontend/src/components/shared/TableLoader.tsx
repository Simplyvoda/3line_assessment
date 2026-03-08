import { Skeleton } from "@/components/ui/skeleton"

export function TableLoader({column_count}:{column_count: number}) {
  return (
    <div className="flex w-full max-w-sm flex-row gap-2">
      {Array.from({ length: column_count }).map((_, index) => (
        <div className="flex gap-4" key={index}>
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  )
}
