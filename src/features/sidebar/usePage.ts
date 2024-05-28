import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPage } from "../../services/apiPages";

export function usePage() {
  const { pageId } = useParams();

  if (!pageId) throw new Error("pageId is not found");
  const {
    data: page,
    isPending,
    error,
  } = useQuery({
    queryKey: ["page", { pageId }],
    queryFn: () => getPage(Number(pageId)),
  });

  return { page, isPending, error };
}
