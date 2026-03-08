import { useQuery, useQueryClient } from "@tanstack/react-query";

type UseGenericQueryProps<T> = {
  queryKey: unknown[];
  queryFn: () => Promise<T>;
  enabled?: boolean;
  staleTime?: number;
  placeholderData?: undefined;
};

export const useGenericQuery = <T>(props: UseGenericQueryProps<T>) => {
  const {
    queryKey,
    queryFn,
    enabled = true,
    staleTime = 0,
    placeholderData = undefined,
  } = props;
  const queryClient = useQueryClient();

  const queryResult = useQuery<T>({
    queryKey,
    queryFn,
    enabled,
    staleTime,
    placeholderData,
  });

  const refresh = () => {
    queryClient.invalidateQueries({ queryKey });
  };

  return {
    ...queryResult,
    refresh,
  };
};
