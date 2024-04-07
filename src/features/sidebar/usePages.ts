import { useQuery } from "@tanstack/react-query";
import { getPages } from "../../services/apiPages";

export function usePages() {
  const {
    data: pages,
    error,
    isPending,
  } = useQuery({ queryKey: ["pages"], queryFn: getPages });

  return { pages, error, isPending };
}
