import useSWR from "swr";

export const useWidget = () => {
  const { data, isLoading, error } = useSWR("/api/widget?id=1234");
  return { data };
};
